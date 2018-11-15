import React, { Component } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroViagem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Fields
            date: '',
            source: '',
            destiny: '',
            bus: '',
            // Functions
            buttonDisabled: true 
        };

        this.registerTravel = this.registerTravel.bind(this);
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

    async fieldsInWhite() {
        const { date, source, destiny, bus } = this.state;

        if( date != '' && source != '' && destiny != '' && bus != '') {
            this.setState({ buttonDisabled: false });
        } else {
            this.setState({ buttonDisabled: true });
        }
    }
    
    async registerTravel() {
        const travelling = firebase.database().ref('viagens');

        travelling.push().set({
            data_viagem: this.state.date,
            origem: this.state.source,
            destino: this.state.destiny,
            bus: this.state.bus
        });

        Alert.alert(
            'Sucesso!',
            'Viagem cadastrada com sucesso!!',
            [
                {text: 'Concluir', onPress: () => Actions.principal()}
            ]
        );
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
                            maxLength={10}
                            onChangeText={(date) => this.setState({date})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.date}
                        />

                        <FormLabel labelStyle={styles.labels}>Origem</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local de Saída'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(source) => this.setState({source})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.source}
                        />

                        <FormLabel labelStyle={styles.labels}>Destino</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local de Chegada'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(destiny) => this.setState({destiny})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.destiny}
                        />

                        <FormLabel labelStyle={styles.labels}>Ônibus</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Ônibus escolhido para a viagem'}
                            placeholderTextColor={'#CCC'}
                            onChangeText={(bus) => this.setState({bus})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.bus}
                            //onSelectionChange={() => {selection: {start, end}}}
                        />

                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                            onPress={() => this.registerTravel()}
                            disabled={this.state.buttonDisabled}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };

}
