import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar } from 'react-native-tab-view';

import styleMain from 'assets/styles/main';

export default props => {

    return (
        <View style={styleMain.container}>

            <StatusBar 
                backgroundColor={'#0083B7'}
                barStyle={'light-content'}
            />

            <View style={styleMain.menu}>
                <Text style={styleMain.title}>FretBus</Text>
                <Icon
                    name='arrow-back'
                    color='#FFF'
                    onPress={() => Actions.login()} 
                />   
            </View>
        
            <TabBar
                {...props}
                indicatorStyle={styleMain.indicator}
                style={styleMain.tab_bar}
                labelStyle={styleMain.label}
            />
        </View>
    );
}
