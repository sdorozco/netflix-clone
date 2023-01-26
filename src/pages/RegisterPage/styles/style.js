import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width,
        height,
    },
})