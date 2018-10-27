import React, { Component } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import images from 'config/images';
import styles from 'assets/styles/default';
import stylesc from 'assets/styles/cadastro';


export default class Cadastro extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={styles.container}>

                <StatusBar 
                    backgroundColor={'#0083B7'}
                    barStyle={'light-content'}
                />

                <ScrollView>
                    <View style={stylesc.listaDados}>

                        <Icon
                            raised name='arrow-back'
                            color='#0083B7'
                            onPress={() => Actions.login()} 
                        />
                        
                        <Image 
                            source={images.logo} 
                            style={stylesc.logo}
                        />

                        <Text style={stylesc.titulo}>Novo Usuário</Text>

                        <TextInput
                            placeholder={'Nome Completo'}
                            style={[styles.campos, styles.primeiroCampo]}   
                        />

                        <TextInput
                            placeholder={'Data de Nascimento'}
                            style={styles.campos}
                        />

                        <TextInput
                            placeholder={'CPF'}
                            style={styles.campos}   
                        />

                        <TextInput
                            placeholder={'RG'}
                            style={styles.campos}
                        />

                        <TextInput
                            placeholder={'Telefone'}
                            style={styles.campos}
                        />

                        <TextInput
                            placeholder={'Email'}
                            style={[styles.campos, styles.ultimoCampo]}
                        />

                    </View>

                    <View>

                        <TextInput
                        placeholder={'Usuário'}
                        style={[styles.campos, styles.primeiroCampo]}   
                        />

                        <TextInput
                            placeholder={'Senha'}
                            style={[styles.campos, styles.ultimoCampo]}
                            secureTextEntry={true}
                        />
                        
                        <Button
                            buttonStyle={styles.botao}
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
