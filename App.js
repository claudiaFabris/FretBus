import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View>
          <Image 
              source={ require('./images/logoLogin.png') } 
              style={ style.logo }
          />
          
      </View>
    );

  };
}

const style = StyleSheet.create ({
      logo : {
        width : 200,
        height : 200,
        alignSelf : 'center',
      }
});