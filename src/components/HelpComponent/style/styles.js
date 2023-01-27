import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height,
    },
    header: {
        flexDirection: 'row',
        margin: 10,
    },
    lista: {
        flex: 1,
        margin: 10,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 0,
        margin: 10,
        width: 150,
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 30,
        marginRight: 12,
    },
    iconBack: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    itemList: {
        color: 'blue',
    },
    containerButton: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textService: {
        marginTop: 30,
        fontSize: 23,
        color: 'black',
        textAlign: 'center',
    },
    alignText: {
        textAlign: 'center',
        color: 'black',
    },
// eslint-disable-next-line eol-last
})