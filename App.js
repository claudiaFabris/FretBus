import React, {Component} from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      user: 'Usuário',
      pass: 'Senha' 
    };
  }

  render() {
    return (
      <View style={ style.container }>
          <Image 
              source={ require('./images/logoLogin.png') } 
              style={ style.logo }
          />
          <TextInput
              style={ style.campos }
              onChangeText={(user) => this.setState({user})}
              value={this.state.user}
          />
          <TextInput
              style={ style.campos }
              onChangeText={(pass) => this.setState({pass})}
              value={this.state.pass}
          />
          <TouchableOpacity style={ style.botao }>
              <Text style={ style.textoBotao }>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={ style.textoLink }>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
      </View>
    );
  };
}

const style = StyleSheet.create ({
      container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor : '#dbf0fa',
      },
      logo : {
        width : 200,
        height : 200,
        alignSelf : 'center',
        marginBottom: 20,
      },
      campos : {
        padding : 15,
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 2,
        borderRadius: 10,
        fontSize : 20,
        backgroundColor : 'white',
        color : 'gray',
        marginBottom: 20,
        marginHorizontal : 20,
      },
      botao : {
        marginHorizontal : 20,
        height : 60,
        borderRadius : 10,
        paddingTop : 15,
        backgroundColor : '#245e8d'
      },
      textoBotao : {
        fontSize : 20,
        color : 'white',
        alignSelf : 'center'
      },
      textoLink : {
        marginTop : 30,
        alignSelf : 'center',
        color : 'gray',
        fontSize : 15
      } 
});