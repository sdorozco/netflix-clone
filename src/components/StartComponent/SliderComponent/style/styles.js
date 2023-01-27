import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        width,
    },
    sliderContainer: {
        height,
    },
    buttonContainer: {
        color: 'white',
        margin: 25,
        backgroundColor: 'black',
    },
    button: {
        fontSize: 25,
    },
    containerGradient: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    containerQuestion: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonStyle: {
        borderRadius: 0,
    },
    linear:{
        height: 45,
    },
// eslint-disable-next-line eol-last
});