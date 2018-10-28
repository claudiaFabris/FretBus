import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0083B7',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
        marginBottom: 20
    },
    labels: {
        color: '#FFF'
    },
    inputs: {
        borderBottomWidth: 2, 
        borderBottomColor: '#fff',
        color: '#F5F5F7'
    },
    button: {
        height: 60,
        backgroundColor: '#FFF',
        marginVertical: 20,
        paddingTop: 15
    },
    textLink: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 30
    } 
});

export default styles;
