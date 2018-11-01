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
            nomeCompleto: '', 
            dataNascimento: '', 
            cpf: '', 
            rg: '', 
            telefone: '',
            email: '', 
            senha: '' 
        };

        this.saveUser = this.saveUser.bind(this);
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

    validationData() {
        const {nomeCompleto, dataNascimento, cpf, rg, telefone, email, senha} = this.state;

        if(
            nomeCompleto === '' || dataNascimento === '' || cpf === '' || rg === '' ||
            telefone === '' || email === '' || senha === ''
        ){
            Alert.alert('Atenção!', 'Algum campo não foi preenchido');
            return true;
        }

        return false;
    }
    
    async saveUser() {
        if(!this.validationData()){
            let usuarios = await firebase.database().ref('usuarios');

            usuarios.push().set({
                nomeCompleto: this.state.nomeCompleto,
                dataNascimento: this.state.dataNascimento,
                cpf: this.state.cpf,
                rg: this.state.rg,
                telefone: this.state.telefone,
                email: this.state.email,
                senha: this.state.senha
            });

            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .then(() => { 
                    Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso.')
                })
                .catch(() => { 
                    Alert.alert('Erro!', 'Usuário não cadastrado.')
                });
        }     
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

                        <FormLabel labelStyle={styles.labels}>Nome Completo</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'João Alvarez Fortunato'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(nomeCompleto) => this.setState({nomeCompleto})}
                        />
                       
                        <FormLabel labelStyle={styles.labels}>Data de Nascimento</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'00-00-0000'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            maxLength={10}
                            onChangeText={(dataNascimento) => this.setState({dataNascimento})}
                        />

                        <FormLabel labelStyle={styles.labels}>CPF</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'000.000.000-00'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            maxLength={14}
                            onChangeText={(cpf) => this.setState({cpf})}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>RG</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'0000000000-0'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            maxLength={20}
                            onChangeText={(rg) => this.setState({rg})}
                        />
                        
                        <FormLabel labelStyle={styles.labels}>Telefone</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'(00) 90000-0000'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'phone-pad'}
                            maxLength={20}
                            onChangeText={(telefone) => this.setState({telefone})}
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

                        <FormLabel labelStyle={styles.labels}>Email</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'joao.alvarez@exemplo.com'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'email-address'}
                            onChangeText={(email) => this.setState({email})}
                        />
                       
                        <FormLabel labelStyle={styles.labels}>Senha</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs} 
                            placeholder={'**************'}
                            placeholderTextColor={'#CCC'}
                            maxLength={30}
                            secureTextEntry={true}
                            onChangeText={(senha) => this.setState({senha})}
                        />
                            
                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                            onPress={() => this.saveUser()}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };
}
