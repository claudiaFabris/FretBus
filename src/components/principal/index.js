import React, { Component } from 'react';
//import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Eventos from 'components/eventos';
import Onibus from 'components/onibus';
import Viagens from 'components/viagens';
import TabBarMenu from 'components/menu';

export default class Principal extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Ônibus' },
            { key: '2', title: 'Eventos' },
            { key: '3', title: 'Viagens' },
        ],
    };

    _handleIndexChange = (index) => this.setState({ index });

    _renderTabBar = (props) => <TabBarMenu {...props} />

    _renderScene = SceneMap({
        '1': Onibus,
        '2': Eventos,
        '3': Viagens,
    });

    render() {
        return (
            <TabView
                style={{flex: 1}}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                //initialLayout={initialLayout}
            />
        );
    }
}