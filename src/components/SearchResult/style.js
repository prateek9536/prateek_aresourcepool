import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    header: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    button: {
        borderRadius: 5,
        width: 100,
        backgroundColor: '#644BFF',
        paddingVertical: 10
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center'
    },
    tile: {
        backgroundColor: '#e5e5e5',
        borderRadius: 20,
        marginRight: 10
    },
    tileText: {
        fontSize: 13,
        color: '#666',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    videoSection: {
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    sectionNew: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    video: {
        backgroundColor: '#e5e5e5',
        width: '100%',
        borderRadius: 10,
        height: 100,
        marginTop: 20
    },
    iconView: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 5
    }
});