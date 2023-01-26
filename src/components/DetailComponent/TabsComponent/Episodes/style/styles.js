import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    text: {
        color: 'white',
        fontSize: 17,
    },
    summary: {
        color: 'grey',
        textAlign: 'justify',
        marginVertical: 10,
    },
    containerVideo: {
        margin: 10,
    },
    video: {
        flexDirection: 'row',
    },
    episodeName: {
        justifyContent: 'center',
    },
    iconPlay: {

    },
    iconPlayContainer: {
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 10,
    },
    textTitle:{
        color:'white',
        width:'100%',
        fontSize:12,
    },
})