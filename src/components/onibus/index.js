import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from 'assets/styles/details';

export default class Onibus extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flex: 1}}>
                    <View style={styles.box}>
                        <Icon
                            name='directions-bus'
                            color='#0083B7'
                            size={50} 
                        />

                        <View style={styles.boxInfo}>
                            <Text>
                                <Text style={styles.textInfo}>Empresa: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Motorista: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Nº de Poltronas: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Valor do Frete: </Text> {'-------'}
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.buttonFloat}>
                    <Icon
                        raised
                        reverse 
                        name='add'
                        color='#0083B7'
                        onPress={() => Actions.cadastroOnibus()} 
                    />
                </View>
            </View>
        )
    }
}