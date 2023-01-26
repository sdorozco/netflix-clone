import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width,
        height,
    },
})