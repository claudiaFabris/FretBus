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
    campos: {
        backgroundColor: '#FFF',
        borderColor: '#0083B7', 
        borderBottomWidth: 1,
        color: '#999',
        fontSize: 20,
        height: 60, 
        marginHorizontal : 20,
        padding: 15
    },
    primeiroCampo: {
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    ultimoCampo: {
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0
    },
    botao: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 20,
        paddingTop: 15
    },
    textoLink: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 15,
        marginTop: 30
    } 
});

export default styles;
