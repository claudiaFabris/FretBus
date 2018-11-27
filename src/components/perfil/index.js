import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import images from 'config/images';
import styles from 'assets/styles/profile';


export default class Perfil extends Component {

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
                    <Text>Maurício de Souza Porfírio</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.inputText}>CPF</Text>
                            <Text>000.000.000-00</Text>
                        </View>
                        <View>
                            <Text style={styles.inputText}>RG</Text>
                            <Text>0000000000-0</Text>
                        </View>
                    </View>
                    <Text style={styles.inputText}>E-mail</Text>
                    <Text>mauriciosporfirio@gmail.com</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.inputText}>Telefone</Text>
                            <Text>(85) 9.8404-0835</Text>
                        </View>
                        <View>
                            <Text style={styles.inputText}>Data de nascimento</Text>
                            <Text>13-05-1997</Text>
                        </View>
                    </View>
                </View>
                            
            </View>
        )
    }

}