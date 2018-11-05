import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroEvento extends Component {

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
                            name='event-note'
                            iconStyle={styleRegister.iconBus}
                            size={150}
                        />

                        <FormLabel labelStyle={styles.labels}>Data</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Data do Evento'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                        />

                        <FormLabel labelStyle={styles.labels}>Local</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local do Evento'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Horário</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Horário de Início'}
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
