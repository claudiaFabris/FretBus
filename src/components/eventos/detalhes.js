import React, { Component } from 'react';
//import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
//import { Icon } from 'react-native-elements';
//import { Actions } from 'react-native-router-flux';


export default class DetalheEvento extends Component {
    
      
    render() {
        return (
            <MapView
                initialRegion={
                    {
                        latitude:-3.7318616,
                        longitude:-38.5266704,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }
                }
                style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            />
        );
    }

}
