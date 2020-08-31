import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    heading: {
        alignSelf: 'center',
        marginVertical: 30,
        fontSize: 18
    },
    widget: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1
    },
    selected: {
        borderColor: 'red',
        borderWidth: 1
    },
    unselectedCircle: {
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#b5b2b2'
    },
    selectedCircle: {
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
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