import React, { Component } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import images from 'config/images';
import styles from 'assets/styles/default';


export default class Login extends Component {

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

                <FormLabel labelStyle={styles.labels}>Usuário</FormLabel>
                <FormInput
                    inputStyle={styles.inputs} 
                    placeholder={'joaoAlavrez'}
                    placeholderTextColor={'#CCC'}
                />
                
                <FormLabel labelStyle={styles.labels}>Senha</FormLabel>
                <FormInput
                    inputStyle={styles.inputs} 
                    placeholder={'********'}
                    placeholderTextColor={'#CCC'}
                    secureTextEntry={true}
                />
      
                <Button
                    buttonStyle={styles.button}
                    title={'Entrar'}
                    color={'#0083B7'}
                    fontSize={20}
                    icon={{name: 'send', color: '#0083B7', size: 20} }
                />
                
                <TouchableOpacity onPress={() => Actions.cadastro()}>
                    <Text style={styles.textLink}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    };
}
