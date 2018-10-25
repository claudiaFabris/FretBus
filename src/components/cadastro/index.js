import React, { Component } from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage} from 'react-native-elements';

export default class Cadastro extends Component {

    render() {
        return(
            <View>
                <FormLabel>Nome</FormLabel>
                <FormInput />
                <FormValidationMessage>{'Campo Obrigatório'}</FormValidationMessage>
            </View>
        );
    };
}
