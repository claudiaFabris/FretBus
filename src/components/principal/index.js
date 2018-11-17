import React, { Component } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styleMain from 'assets/styles/main';

import Eventos from 'components/eventos';
import Onibus from 'components/onibus';
import Viagens from 'components/viagens';


export default class Principal extends Component{

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: 'onibus', title: 'Ônibus' },
                { key: 'eventos', title: 'Eventos' },
                { key: 'viagens', title: 'Viagens' },
            ],
        };

        this._handleIndexChange = this._handleIndexChange.bind(this, false);
    }

    _handleIndexChange = (index) => this.setState({ index });

    _renderTabBar = (props) => (
        <View style={styleMain.background}>
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
                style={styleMain.tabbar}
                tabStyle={styleMain.tab}
                labelStyle={styleMain.label}
            />
        </View>
    );

    _renderScene = SceneMap({
        onibus: Onibus,
        eventos: Eventos,
        viagens: Viagens,
    });

    render() {
        return (
            <TabView
                style={[styleMain.container, this.props.styleMain]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
};