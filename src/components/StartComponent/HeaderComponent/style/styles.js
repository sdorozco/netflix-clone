import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        margin: 5,
        marginTop: 8,
        width: width,
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    image: {
        width: 35,
        height: 35,
    },
    icon: {
        margin: 6,
        paddingRight: 10,
    },
    containerModal: {
        backgroundColor: 'white',
        padding: 20,
        margin: 30,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});