import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    circleTop: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 1000,
        backgroundColor: 'red',
        left: 0,
        top: -80
    },
    circleBottom: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 1000,
        backgroundColor: '#f6f6f6',
        right: 0,
        bottom: -80
    },
    heading: {
        fontSize: 35,
        marginVertical: 40
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#e5e5e5',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    paragraph: {
        marginTop: 20,
        marginBottom: 50,
        color: '#777'
    },
    button: {
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#644BFF',
        paddingVertical: 10
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#e5e5e5'
    }
});