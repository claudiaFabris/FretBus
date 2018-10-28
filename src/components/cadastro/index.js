import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import images from 'config/images';
import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';


export default class Cadastro extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            nomeCompleto: '', 
            dataNascimento: '', 
            cpf: '', 
            rg: '', 
            telefone: '',
            email: '', 
            usuario: '', 
            senha: '' 
        };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBACpCdpjfehh2--YWyidK5P8iU4XvTNnY",
            authDomain: "app-fretbus.firebaseapp.com",
            databaseURL: "https://app-fretbus.firebaseio.com",
            projectId: "app-fretbus",
            storageBucket: "app-fretbus.appspot.com",
            messagingSenderId: "411818722996"
        });
    }

    saveUser() {
        let usuarios = firebase.database().ref('usuarios');

        usuarios.push().set({
            nomeCompleto: this.state.nomeCompleto,
            dataNascimento: this.state.dataNascimento,
            cpf: this.state.cpf,
            rg: this.state.rg,
            telefone: this.state.telefone,
            email: this.state.email,
            usuario: this.state.usuario,
            senha: this.state.senha
        });
    }

    render() {
        return(
            <View style={styles.container}>

                <ScrollView>

                    <Icon
                        raised name='arrow-back'
                        color='#0083B7'
                        onPress={() => Actions.login()} 
                    />
                    
                    <Image 
                        source={images.logo} 
                        style={styles.logo}
                    />

                    <View style={styleRegister.listDatas}>

                        <View style={styleRegister.boxTitle}>
                            <Icon
                                name='account-circle'
                                color='#FFF'
                                size={30} 
                            />
                            <Text style={styleRegister.title}> Dados Pessoais </Text>
                        </View>

                        <FormLabel labelStyle={styles.labels}>Nome</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'João Alvarez Fortunato'}
                            placeholderTextColor={'#CCC'}
                        />
                       
                        <FormLabel labelStyle={styles.labels}>Data de Nascimento</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'00-00-0000'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                        />

                        <FormLabel labelStyle={styles.labels}>CPF</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'000.000.000-00'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>RG</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'0000000000-0'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>Telefone</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'(00) 0000-0000'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'phone-pad'}
                        />

                        <FormLabel labelStyle={styles.labels}>Email</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'joao.alvarez@exemplo.com'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'email-address'}
                        />
                       
                    </View>

                    <View>
                        <View style={styleRegister.boxTitle}>
                            <Icon
                                name='person-pin'
                                color='#FFF'
                                size={30} 
                            />
                            <Text style={styleRegister.title}> Dados do Perfil </Text>
                        </View>

                        <FormLabel labelStyle={styles.labels}>Usuário</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'jaoaAlvarez'}
                            placeholderTextColor={'#CCC'}
                        />
                       
                        <FormLabel labelStyle={styles.labels}>Senha</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'**************'}
                            placeholderTextColor={'#CCC'}
                            secureTextEntry={true}
                        />
                    </View>

                    <Button
                        buttonStyle={styles.button}
                        title={'Cadastrar'}
                        color={'#0083B7'}
                        fontSize={20}
                        icon={{name: 'check', color: '#0083B7', size: 20}}
                        onPress={() => this.saveUser()}
                    />
                </ScrollView>

            </View>
        );
    };
}
