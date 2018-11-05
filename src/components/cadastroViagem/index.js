import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroViagem extends Component {

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
                            name='date-range'
                            iconStyle={styleRegister.iconBus}
                            size={150}
                        />

                        <FormLabel labelStyle={styles.labels}>Data</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Data da Viagem'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                        />

                        <FormLabel labelStyle={styles.labels}>Origem</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local de Saída'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Destino</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local de Chegada'}
                            placeholderTextColor={'#CCC'}
                        />

                        <FormLabel labelStyle={styles.labels}>Ônibus</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Ônibus escolhido para a viagem'}
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
