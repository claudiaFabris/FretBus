import React, { Component } from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import images from 'config/images';
import styles from 'assets/styles/default';


export default class Login extends Component {
  
    constructor(props) {
        super(props);
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

                <TextInput
                    placeholder={'Usuário'}
                    style={[styles.campos, styles.primeiroCampo]}   
                />

                <TextInput
                    placeholder={'Senha'}
                    style={[styles.campos, styles.ultimoCampo]}
                    secureTextEntry={true}
                />
                
                <Button
                    buttonStyle={styles.botao}
                    title={'Entrar'}
                    color={'#0083B7'}
                    fontSize={20}
                    icon={{name: 'send', color: '#0083B7', size: 20} }
                />
                
                <TouchableOpacity onPress={() => Actions.cadastro()}>
                    <Text style={styles.textoLink}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    };
}
