import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import firebase from 'firebase';
import styleMain from 'assets/styles/main';


export default props => {

    menu = null;

    setMenuRef = (ref) => {
        this.menu = ref;
    };

    hideMenu = () => {
        this.menu.hide();
    };

    showMenu = () => {
        this.menu.show();
    };

    connectFirebase = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBACpCdpjfehh2--YWyidK5P8iU4XvTNnY",
                authDomain: "app-fretbus.firebaseapp.com",
                databaseURL: "https://app-fretbus.firebaseio.com",
                projectId: "app-fretbus",
                storageBucket: "app-fretbus.appspot.com",
                messagingSenderId: "411818722996"
            });
        }
    }

    logOut = () => {
        firebase.auth().signOut()
            .then(() => { 
                Actions.login();
                this.hideMenu();
            });
    }
    
    return (
        <View style={styleMain.container}>

            <StatusBar 
                backgroundColor={'#0083B7'}
                barStyle={'light-content'}
            />

            <View style={styleMain.menu}>
                <Text style={styleMain.title}>FretBus</Text>

                <Menu
                    ref={this.setMenuRef}
                    button={
                        <Icon
                            reverse
                            name='more-vert'
                            color='#0083B7'
                            iconStyle={{marginTop: 6, marginLeft: 30}}
                            onPress={() => this.showMenu()}
                        />   
                    }>
                    <MenuItem onPress={() => {
                        Actions.perfil()
                        this.hideMenu()
                    }}>Perfil</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => this.logOut()}>Sair</MenuItem>
                </Menu>
                
            </View>

            <TabBar
                {...props}
                indicatorStyle={styleMain.indicator}
                style={styleMain.tabBar}
                labelStyle={styleMain.label}
            />
        </View>
    );
}

