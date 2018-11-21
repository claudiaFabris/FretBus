import React, { Component } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';
import styles from 'assets/styles/default';
import styleRegister from 'assets/styles/register';

export default class CadastroEvento extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            dateEvent: '', local: '', hours: '',
            buttonDisabled: true
        };

        this.createEvent = this.createEvent.bind(this);
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

    fieldsInWhite = () => {
        const { dateEvent, local, hours } = this.state;
    
        if( dateEvent != '' && local != '' && hours != '') {
            this.setState({ buttonDisabled: false });
        } else {
            this.setState({ buttonDisabled: true });
        }
    };

    
    createEvent() {
        const events = firebase.database().ref('eventos');

        events.push().set({
            data_evento: this.state.dateEvent,
            local: this.state.local,
            horario: this.state.hours
        });

        Alert.alert(
            'Sucesso!',
            'Evento cadastrado com sucesso!!',
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
                            maxLength={10}
                            onChangeText={(dateEvent) => this.setState({dateEvent})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.dateEvent}
                        />

                        <FormLabel labelStyle={styles.labels}>Local</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Local do Evento'}
                            placeholderTextColor={'#CCC'}
                            maxLength={40}
                            onChangeText={(local) => this.setState({local})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.local}
                        />

                        <FormLabel labelStyle={styles.labels}>Horário</FormLabel>
                        <FormInput
                            inputStyle={styles.inputs}
                            placeholder={'Horário de Início'}
                            placeholderTextColor={'#CCC'}
                            keyboardType={'numeric'}
                            maxLength={5}
                            onChangeText={(hours) => this.setState({hours})}
                            onKeyPress={() => this.fieldsInWhite()}
                            value={this.state.hours}
                        />

                        <Button
                            buttonStyle={styles.button}
                            title={'Cadastrar'}
                            color={'#0083B7'}
                            fontSize={20}
                            icon={{name: 'check', color: '#0083B7', size: 20}}
                            onPress={() => this.createEvent()}
                            disabled={this.state.buttonDisabled}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    };
}
