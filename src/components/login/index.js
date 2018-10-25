import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import images from 'config/images';


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
                    style={[styles.campos, styles.campoLogin]}
                    placeholder={'Usuário'}
                />
                <TextInput
                    style={[styles.campos, styles.campoSenha]}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                />
                
                <Button
                    buttonStyle={styles.botao}
                    title={'Entrar'}
                    icon={{name: 'send', color: '#0083B7', size: 20} }
                    color={'#0083B7'}
                    fontSize={20}
                />
                
                <TouchableOpacity onPress={() => Actions.cadastro()}>
                    <Text style={styles.textoLink}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0083B7',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
        marginBottom: 20
    },
    campos: {
        backgroundColor: '#FFF',
        borderColor: '#0083B7', 
        borderRadius: 10,
        color: '#999',
        fontSize: 20,
        height: 60, 
        marginHorizontal : 20,
        padding: 15
    },
    campoLogin: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 1
    },
    campoSenha: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0
    },
    botao: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 5,
        marginTop: 20,
        paddingTop: 15
    },
    textoLink: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 15,
        marginTop: 30
    } 
});
