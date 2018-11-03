import React, { Component } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from 'components/tabBarMenu';
import Eventos from 'components/eventos';


export default class Principal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: 'eventos', title: 'Eventos' },
                { key: 'onibus', title: 'Ônibus' },
                { key: 'viagens', title: 'Viagens' },
            ],
        }
    }

    _handleChangeTab = index => this.setState({index});

    _renderHeader = props => <TabBarMenu {...props} />

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  eventos: EventosRoute,
                  onibus: OnibusRoute,
                  viagens: ViagensRoute,
                })}
                renderHeader={this._renderHeader}
                onIndexChange={(index) => this.setState({index})}
            />
        );
    }

}

const EventosRoute = () => (
    <View><Eventos></Eventos></View>
);

const OnibusRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ViagensRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
