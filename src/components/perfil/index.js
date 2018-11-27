import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import images from 'config/images';
import styles from 'assets/styles/profile';


export default class Perfil extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '', cpf: '', rg: '', email: '', phone: '', date: ''
        };
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

    dataUser() {
        const usuarios = firebase.database().ref('usuarios');
        const usuarioLogado = firebase.auth().currentUser;

        usuarios.on('value', (snapshot) => {
            let dados = snapshot.val();
            let users = dados != null ? Object.values(dados) : [];
            
            users.forEach((user) => {
                if(usuarioLogado.email === user.email) {
                    this.setState({
                        name: user.nome_completo,
                        cpf: user.cpf,
                        rg: user.rg,
                        email: user.email,
                        phone: user.telefone,
                        date: user.data_nascimento
                    });
                }
            });
        
        }); 
    }

    componentDidMount() {
        this.dataUser();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop: 10}}>
                    <Icon
                        raised 
                        reverse
                        name='arrow-back'
                        color='#0083B7'
                        onPress={() => Actions.principal()} 
                    />
                </View>

                <View style={styles.boxLogo}>
                   <Image source={images.profile} style={styles.logoUser} />
                </View>

                <View style={styles.boxDatasUser}>
                    <Text style={styles.inputText}>Nome</Text>
                    <Text style={styles.valueText}>{this.state.name}</Text>
                    <Text style={styles.inputText}>E-mail</Text>
                    <Text style={styles.valueText}>{this.state.email}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.inputText}>CPF</Text>
                            <Text style={styles.valueText}>{this.state.cpf}</Text>
                        </View>
                        <View>
                            <Text style={styles.inputText}>RG</Text>
                            <Text style={styles.valueText}>{this.state.rg}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.inputText}>Telefone</Text>
                            <Text style={styles.valueText}>{this.state.phone}</Text>
                        </View>
                        <View>
                            <Text style={styles.inputText}>Data de nascimento</Text>
                            <Text style={styles.valueText}>{this.state.date.replace(/-/g, '/')}</Text>
                        </View>
                    </View>
                </View>
                            
            </View>
        )
    }

}