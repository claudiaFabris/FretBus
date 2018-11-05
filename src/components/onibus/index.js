import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class Onibus extends Component {
    render(){
        return(
            <View>
                <Icon
                        raised name='add'
                        color='#0083B7'
                        onPress={() => Actions.cadastroOnibus()} 
                    />
            </View>
        )
    }
}