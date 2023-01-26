import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    containerInputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        margin: 10,
        borderColor: 'black',
    },
    textTitle: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '20%',
        marginTop: '20%',
    },
    textSubtitle: {
        color: '#b3b3b3',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        fontSize: 40,
        width: '100%',
        borderRadius: 0,
        marginTop: 20,
    },
    textHelp: {
        textAlign: 'left',
        width: '100%',
    },
})