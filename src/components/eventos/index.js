import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/details';


export default class Eventos extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }

        this.listEvents = this.listEvents.bind(this);
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

    listEvents() {
        const eventos = firebase.database().ref('eventos');

        eventos.on('value', (snapshot) => {
            let dados = snapshot.val();
            let itens = dados != null ? Object.values(dados) : [];
            
            this.setState({list: itens});
        });
    }

    componentDidMount() {
        this.listEvents();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.list.map((item, key) => {
                            return (
                                <View key={key} style={styles.box}>
                                    <Icon
                                        name='event-note'
                                        color='#0083B7'
                                        size={50} 
                                    />

                                    <View style={styles.boxInfo}>
                                        <Text>
                                            <Text style={styles.textInfo}>Nome: </Text> 
                                            {item.nome_evento}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Data: </Text> 
                                            {item.data_evento}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Local: </Text> 
                                            {item.local}
                                        </Text>
                                        <Text>
                                            <Text style={styles.textInfo}>Horário: </Text> 
                                            {item.horario}
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
                        onPress={() => Actions.cadastroEvento()} 
                    />
                </View>
            </View>
        )
    }

}
