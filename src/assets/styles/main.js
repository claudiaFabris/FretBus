import { StyleSheet } from 'react-native';

const styleMain = StyleSheet.create({
    container: {
        backgroundColor: '#0083B7',
        elevation: 4,
        marginBottom: 6
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },
    tabBar: {
        backgroundColor: '#0083B7',
        elevation: 0
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
