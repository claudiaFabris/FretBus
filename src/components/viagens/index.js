import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/details';


export default class Viagens extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }

        this.listTravels = this.listTravels.bind(this);
    }

    componentWillMount() {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBACpCdpjfehh2--YWyidK5P8iU4XvTNnY",
                authDomain: "app-fretbus.firebaseapp.com",
                databaseURL: "https://app-fretbus.firebaseio.com",
                projectId: "app-fretbus",
                storageBucket: "app-fretbus.appspot.com",
                messagingSenderId: "411818722996"
            });
        }
    }

    listTravels() {
        const viagens = firebase.database().ref('viagens');

        viagens.on('value', (snapshot) => {
            let dados = snapshot.val();
            let itens = dados != null ? Object.values(dados) : [];
            
            this.setState({list: itens});
        });   
    }

    componentDidMount() {
        this.listTravels();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.list.map((item, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => {Actions.detalheViagem({viagem: item})}}>
                                    <View style={styles.box}>
                                        <Icon
                                            name='date-range'
                                            color='#0083B7'
                                            size={50} 
                                        />

                                        <View style={styles.boxInfo}>
                                            <Text>
                                                <Text style={styles.textInfo}>Data: </Text> 
                                                {item.data_viagem.replace(/-/g, '/')}
                                            </Text>
                                            <Text>
                                                <Text style={styles.textInfo}>Origem: </Text> 
                                                {item.cidade_origem}
                                            </Text>
                                            <Text>
                                                <Text style={styles.textInfo}>Destino: </Text> 
                                                {item.cidade_destino}
                                            </Text>
                                            <Text>
                                                <Text style={styles.textInfo}>Ônibus: </Text> 
                                                {item.bus}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                <View style={styles.buttonFloat}>
                    <Icon
                        raised
                        reverse 
                        name='add'
                        color='#0083B7'
                        onPress={() => Actions.cadastroViagem()} 
                    />
                </View>
            </View>
        )
    }
}
