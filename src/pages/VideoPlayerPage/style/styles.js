import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
    },
    video: {
        width,
        height,
    },
    icon: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});