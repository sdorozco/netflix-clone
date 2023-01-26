import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
}
)