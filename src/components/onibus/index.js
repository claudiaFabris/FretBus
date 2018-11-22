import React, { Component } from 'react';
import { ScrollView, View, Text, YellowBox } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/details';

export default class Onibus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [] 
        };

        this.listBus = this.listBus.bind(this);
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

    listBus() {
        const onibus = firebase.database().ref('onibus');

        onibus.on('value', (snapshot) => {
            let dados = snapshot.val();
            let itens = dados != null ? Object.values(dados) : [];
            
            this.setState({list: itens});
        });       
    }

    componentDidMount() {
        this.listBus();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flex: 1}}>
                    {
                        this.state.list.map((item, key) => {
                            return (
                                <View key={key} style={styles.box}>
                                    <Icon
                                        name='directions-bus'
                                        color='#0083B7'
                                        size={50} 
                                    />

                                    <View style={styles.boxInfo}>
                                        <Text>
                                            <Text style={styles.textInfo}>Empresa: </Text> 
                                            {item.empresa}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Motorista: </Text> 
                                            {item.motorista}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Nº de Poltronas: </Text> 
                                            {item.numero_poltronas}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Valor do Frete: </Text> 
                                            R$ {item.valor}
                                        </Text>
                                    </View>
                                </View>
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
                        onPress={() => Actions.cadastroOnibus()} 
                    />
                </View>
            </View>
        )
    }
}

YellowBox.ignoreWarnings(['Setting a timer']);
