import React, { Component } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroOnibus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company: '', conductor: '', numberBus: '', numArmchairs: '', value: '',
            buttonDisabled: true
        };

        this.registerBus = this.registerBus.bind(this);
    }

    componentWillMount() {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBACpCdpjfehh2--YWyidK5P8iU4XvTNnY",
                authDomain: "app-fretbus.firebaseapp.com",
                databaseURL: "https://app-fretbus.firebaseio.com",
                projectId: "app-fretbus",
                storageBucket: "app-fretbus.appspot.com",
                messagingSenderId: "411818722996"
            });
        }
    }

    fieldsInWhite() {
        const { company, conductor, numberBus, numArmchairs, value } = this.state;

        if( company != '' && conductor != '' && numberBus != '' && numArmchairs != '' && value != '') {
            this.setState({ buttonDisabled: false });
        } else {
            this.setState({ buttonDisabled: true });
        }
    }

    registerBus() {
        const bus = firebase.database().ref('onibus');

        bus.push().set({
            empresa: this.state.company,
            proprietario: this.state.conductor,
            numeracao: this.state.numberBus,
            numero_poltronas: this.state.numArmchairs,
            valor: this.state.value
        });

        Alert.alert(
            'Sucesso!',
            'Ônibus cadastrado com sucesso!!',
            [
                {text: 'CONCLUIR', onPress: () => Actions.principal({index: 0})}
            ]
        );
    }

    render() {
        return(
            <View style={styles.container}>

                <ScrollView>
                    <Icon
                        raised 
                        name='arrow-back'
                        color='#0083B7'
                        onPress={() => Actions.principal({index: 0})} 
                    />

                    <View style={styleRegister.listDatas}>

                        <Icon
                            name='directions-bus'
                            color='#0083B7'
                            iconStyle={styleRegister.iconBus}
                            size={100}
                        />

                        <FormLabel labelStyle={styles.labels}>Empresa</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Nome da Empresa'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(company) => this.setState({company})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.company}
                        />

                        <FormLabel labelStyle={styles.labels}>Proprietário</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Nome do Proprietário'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(conductor) => this.setState({conductor})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.conductor}
                        />

                        <FormLabel labelStyle={styles.labels}>Número</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Número do Ônibus'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(numberBus) => this.setState({numberBus})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.numberBus}
                        />

                        <FormLabel labelStyle={styles.labels}>Nº de Poltronas</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Número de Poltronas'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            onChangeText={(numArmchairs) => this.setState({numArmchairs})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.numArmchairs}
                        />

                        <FormLabel labelStyle={styles.labels}>Valor</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Valor do Fretamento'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            onChangeText={(value) => this.setState({value})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.value}
                        />

                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                            onPress={() => this.registerBus()}
                            disabled={this.state.buttonDisabled}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };
}
