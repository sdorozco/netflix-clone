import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
    },
    video: {
        width,
        height,
        backgroundColor: 'black',
    },
    icon: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
// eslint-disable-next-line eol-last
});