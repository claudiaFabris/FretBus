import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default class TabBarMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor:'#000'}}>
                <Text>FretBus</Text>

                <TabBar {...props} />
            </View>
        ); 
    }

}
    