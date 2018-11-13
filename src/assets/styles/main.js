import { StyleSheet } from 'react-native';

const styleMain = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: '#0083B7'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },
    tabbar: {
        backgroundColor: '#0083B7'
    },
    indicator: {
        backgroundColor: '#FFF',
    },
    label: {
        color: '#FFF',
    },
    title: {
        color: '#FFF',
        margin: 20,
        fontSize: 20
    }
});

export default styleMain;
