import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    map: {
        width: Dimensions.get('screen').width,
        height: 450
    },    
    boxEvent: {
        padding: 20,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    textEvent: {
        fontSize: 16,
        marginTop: 10
    },
    textDate: {
        color: '#CCC',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    buttonFloat: {
        position: 'absolute', 
        top: 8, 
        left: 8
    },
    button: {
        height: 60,
        backgroundColor: '#0083B7',
        marginVertical: 20,
        paddingTop: 15
    },
});

export default styles;
