import React, { Component } from 'react';
import { 
    Image, 
    StatusBar,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { Actions } from 'react-native-router-flux';


// Imports
import images from 'config/images';

export default class Login extends Component {
  
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar 
                    backgroundColor={'#dbf0fa'}
                    barStyle={'dark-content'}
                />

                <Image 
                    source={images.logo} 
                    style={styles.logo}
                />

                <TextInput
                    style={[styles.campos, styles.campoLogin]}
                    placeholder={'Usuário'}
                    selectionColor={'#dbf0fa'}
                />
                <TextInput
                    style={[styles.campos, styles.campoSenha]}
                    placeholder={'Senha'}
                    selectionColor={'#dbf0fa'}
                    secureTextEntry={true}
                />
                
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
                
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
        justifyContent: 'center',
        backgroundColor: '#dbf0fa',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
    },
    campos: {
        padding: 15,
        height: 70, 
        borderColor: '#CCC', 
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: 'white',
        color: 'gray',
        marginHorizontal : 20,
    },
    campoLogin: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    campoSenha: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0
    },
    botao: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 60,
        borderRadius: 10,
        paddingTop: 15,
        backgroundColor: '#245e8d'
    },
    textoBotao: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    textoLink: {
        marginTop: 30,
        alignSelf: 'center',
        color: 'gray',
        fontSize: 15
    } 
});
