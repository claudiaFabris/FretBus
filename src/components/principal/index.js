import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Eventos from 'components/eventos';
import Onibus from 'components/onibus';
import Viagens from 'components/viagens';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Principal extends React.Component{

  static title = 'FretBus';
  static backgroundColor = '#0083B7';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      { key: 'onibus', title: 'Ônibus' },
      { key: 'eventos', title: 'Eventos' },
      { key: 'viagens', title: 'Viagens' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    onibus: Onibus,
    eventos: Eventos,
    viagens: Viagens,
  });

  render() {
    return (
      <TabView
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#0083B7',
  },
  indicator: {
    backgroundColor: '#FFF',
  },
  label: {
    color: '#FFF',
    fontWeight: '300',
  },
});