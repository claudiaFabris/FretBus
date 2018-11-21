import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from 'assets/styles/details';


export default class Viagens extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{flex: 1}}>
                    <View style={styles.box}>
                        <Icon
                            name='date-range'
                            color='#0083B7'
                            size={50} 
                        />

                        <View style={styles.boxInfo}>
                            <Text>
                                <Text style={styles.textInfo}>Data: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Origem: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Destino: </Text> {'-------'}
                            </Text>
                            <Text>
                                <Text style={styles.textInfo}>Ônibus: </Text> {'-------'}
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
                        onPress={() => Actions.cadastroViagem()} 
                    />
                </View>
            </View>
        )
    }

}
