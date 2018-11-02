import React, { Component } from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

//import TabBarMenu from 'components/tabBarMenu';
import Eventos from 'components/eventos';

const EventosRoute = () => (
    <View> <Eventos></Eventos> </View>
);
const OnibusRoute = () => (
    <View style={{ backgroundColor: '#673ab7' }} />
);
const ViagensRoute = () => (
    <View style={{ backgroundColor: '#673ab7' }} />
);

export default class Principal extends Component {
    state = {
        index: 0,
            routes: [
              { key: 'eventos', title: 'Eventos' },
              { key: 'onibus', title: 'Ônibus' },
              { key: 'viagens', title: 'Viagens' },
            ],
    };

    //_renderHeader = props => <TabBarMenu {...props} />

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  eventos: EventosRoute,
                  onibus: OnibusRoute,
                  viagens: ViagensRoute,
                })}
                //renderHeader={this._renderHeader}
                onIndexChange={index => this.setState({ index })}
            />
        );
    }

}
