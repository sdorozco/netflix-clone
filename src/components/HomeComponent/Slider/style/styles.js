import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width,
    },
    sliderContainer: {
        height: 240,
    },
    }
// eslint-disable-next-line eol-last
);