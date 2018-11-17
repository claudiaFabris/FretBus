import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
        backgroundColor: '#FFF'
    },
    boxInfo: {
        marginLeft: 10
    },
    textInfo: {
        fontWeight: 'bold'
    },
    buttonFloat: {
        position: 'absolute', 
        bottom: 8, 
        right: 8
    }
});

export default styles;
