import React, { Component } from 'react';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import images from 'config/images';
import styles from 'assets/styles/default';


export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            // Fields
            email: '',
            password: '',
            // Functions
            buttonDisabled: true 
        }

        this.signIn = this.signIn.bind(this);

        console.ignoredYellowBox = true;
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

    async fieldsInWhite() {
        const { email, password } = this.state;

        if(email != '' && password != '') { 
            this.setState({ buttonDisabled: false });
        } else {
            this.setState({ buttonDisabled: true });
        }
    }

    async signIn() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Actions.principal();
        })
        .catch((error) => {
            if(error.code == 'auth/invalid-email') {
                Alert.alert('E-mail inválido', 'O endereço de e-mail não corresponde ao formato desejado.');
            }

            if(error.code == 'auth/user-not-found') {
                Alert.alert('Usuário não encontrado', 'O e-mail não foi encontrado.');
            }

            if(error.code == 'auth/wrong-password') {
                Alert.alert('Senha incorreta', 'Senha incorreta.');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar 
                    backgroundColor={'#0083B7'}
                    barStyle={'light-content'}
                />

                <Image 
                    source={images.logo} 
                    style={styles.logo}
                />

                <FormLabel labelStyle={styles.labels}>E-mail</FormLabel>
                <FormInput
                    inputStyle={styles.inputs} 
                    placeholder={'joao.alvarez@exemplo.com'}
                    placeholderTextColor={'#CCC'}
                    keyboardType={'email-address'}
                    onChangeText={(email) => this.setState({email})}
                    onKeyPress={() => this.fieldsInWhite()}
                    value={this.state.email}
                />
                
                <FormLabel labelStyle={styles.labels}>Senha</FormLabel>
                <FormInput
                    inputStyle={styles.inputs} 
                    placeholder={'**************'}
                    placeholderTextColor={'#CCC'}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    onKeyPress={() => this.fieldsInWhite()}
                    value={this.state.password}
                />
      
                <Button
                    buttonStyle={styles.button}
                    title={'Entrar'}
                    color={'#0083B7'}
                    fontSize={20}
                    icon={{name: 'send', color: '#0083B7', size: 20}}
                    onPress={() => this.signIn()}
                    disabled={this.state.buttonDisabled}
                />
                
                <TouchableOpacity onPress={() => Actions.cadastro()}>
                    <Text style={styles.textLink}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    };
}
