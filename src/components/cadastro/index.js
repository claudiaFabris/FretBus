import React, { Component } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
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
            name: '', date: '', cpf: '', rg: '', 
            phone: '', email: '', password: '',
            buttonDisabled: true
        };

        this.signUp = this.signUp.bind(this);
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

    fieldsInWhite() {
        const { name, date, cpf, rg, phone, email, password } = this.state;

        if( name != '' && date != '' && cpf != '' && rg != '' &&
            phone != '' && email != '' && password != '') {
            
            this.setState({ buttonDisabled: false });
        } else {
            this.setState({ buttonDisabled: true });
        }
    }
    
    signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            const users = firebase.database().ref('usuarios');

            users.push().set({
                nome_completo: this.state.name,
                data_nascimento: this.state.date,
                cpf: this.state.cpf,
                rg: this.state.rg,
                telefone: this.state.phone,
                email: this.state.email 
            });

            Alert.alert(
                'Cadastro',
                'Conta criada com sucesso.',
                [
                    {text: 'AVANÇAR', onPress: () => this.login()}
                ]
            );
        })
        .catch((error) => {
            if(error.code == 'auth/invalid-email') {
                Alert.alert('E-mail inválido', 'O endereço de e-mail não corresponde ao formato desejado.');
            }

            if(error.code == 'auth/email-already-in-use') {
                Alert.alert('E-mail existente', 'O e-mail fornecido já está em uso por outro usuário.');
            }

            if(error.code == 'auth/weak-password') {
                Alert.alert('Senha inválida', 'A senha deve conter no mínimo 6 caracteres.');
            }
        })
    }

    login() {
        firebase.auth().onAuthStateChanged(
            (currentUser) => {
                if(currentUser) {
                    Actions.principal();
                }
            }
        );
    }

    render() {
        return (
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

                        <FormLabel labelStyle={styles.labels}>Nome Completo</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'João Alvarez Fortunato'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
                            onChangeText={(name) => this.setState({name})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.name}
                        />
                       
                        <FormLabel labelStyle={styles.labels}>Data de Nascimento</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'00-00-0000'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
                            keyboardType={'numeric'}
                            maxLength={10}
                            onChangeText={(date) => this.setState({date})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.date}
                        />

                        <FormLabel labelStyle={styles.labels}>CPF</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'000.000.000-00'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
                            keyboardType={'numeric'}
                            maxLength={14}
                            onChangeText={(cpf) => this.setState({cpf})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.cpf}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>RG</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'0000000000-0'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
                            keyboardType={'numeric'}
                            maxLength={14}
                            onChangeText={(rg) => this.setState({rg})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.rg}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>Telefone</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'(00) 90000-0000'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
                            keyboardType={'phone-pad'}
                            maxLength={20}
                            onChangeText={(phone) => this.setState({phone})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.phone}
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

                        <FormLabel labelStyle={styles.labels}>E-mail</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'joao.alvarez@exemplo.com'}
                            placeholderTextColor={'#CCC'}
                            selectionColor={'#FFF'}
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
                            selectionColor={'#FFF'}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.password}
                        />

                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                            onPress={() => this.signUp()}
                            disabled={this.state.buttonDisabled}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };
}
