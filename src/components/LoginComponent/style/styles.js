import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSeparator: {
        marginBottom: 60,
    },
    containerBack: {
        flex: 1,
        flexDirection: 'row',
        margin: 8,
    },
    containerInputs: {
        position: 'absolute',
        width,
        paddingTop: '35%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    image: {
        width: 100,
        height: 33,
        marginLeft: 20,
    },
    icon: {
        padding: 5,
    },
    inputs: {
        color: '#fff',
        margin: 10,
        height: 70,
        fontSize: 12,
    },
    containerButton: {
        flex: 1,
        margin: 15,
        paddingTop: 20,
    },
    button: {
        borderRadius: 5,
        borderColor: '#fff',
    },
    buttonHelp: {
        marginTop: 30,
        borderColor: 'transparent',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSuscribe: {
        marginTop: 30,
        borderColor: 'transparent',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSuscribe: {
        color: 'white',
        fontSize: 17,
    },
    textHelp: {
        color: '#b3b3b3',
        fontSize: 15,
    },
    textHelper: {
        textAlign: 'left',
        width: '100%',
    },
})