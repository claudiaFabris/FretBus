import React, {Component} from 'react';
import { 
    Image, 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';


// Imports
import images from '../../config/images';

export default class Login extends Component {
  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={images.logo} 
                    style={styles.logo}
                />

                <TextInput
                    style={styles.campos}
                    placeholder='Usuário'
                />
                <TextInput
                    style={styles.campos}
                    placeholder='Senha'
                />
                
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: 'white',
        color: 'gray',
        marginBottom: 20,
        marginHorizontal : 20,
    },
    botao: {
        marginHorizontal: 20,
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
