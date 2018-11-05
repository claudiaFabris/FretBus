import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroOnibus extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>

                <ScrollView>

                    <Icon
                        raised name='arrow-back'
                        color='#0083B7'
                        onPress={() => Actions.principal()} 
                    />

                    <View style={styleRegister.listDatas}>

                        <Icon
                            name='directions-bus'
                            color='#0083B7'
                            iconStyle={styleRegister.iconBus}
                            size={150}
                        />

                        <FormLabel labelStyle={styles.labels}>Empresa</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Nome da Empresa'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Motorista</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Nome do Motorista'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Nº de Poltronas</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Número de Poltronas'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Valor</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Valor do Fretamento'}
                            placeholderTextColor={'#CCC'}
                        />

                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };
}
