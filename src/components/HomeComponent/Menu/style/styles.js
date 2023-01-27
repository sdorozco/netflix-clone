import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create(
    {
        avatarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width / 2 + 59,
            borderColor: '#000',
            borderBottomWidth: 3,
            paddingHorizontal: 20,
            paddingVertical: 20,
        },
        avatarImage: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            width: 60,
            height: 60,
            marginLeft: 20,
        },
        text: {
            color: '#b3b3b3',
            fontSize: 12,
        },
        scrollContainer: {
            width: width / 2 + 59,
        },
        textWithIcon: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderColor: '#000',
            borderBottomWidth: 3,
        },
        withIcon: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconWithText: {
            marginRight: 10,
            paddingLeft: 20,
        },
        rightIcon: {
            marginRight: 20,
        },
        menu: {
            flex: 1,
            width: width,
            height: height,
            backgroundColor: '#191919',
        },
        items: {
            paddingVertical: 15,
            paddingLeft: 20,
            marginTop: 5,
        },
        itemsSelected: {
            borderLeftWidth: 5,
            borderColor: 'red',
        },
        noSelectedItems: {
            paddingVertical: 20,
            paddingLeft: 25,
            marginTop: 5,
        },
        textUser: {
            paddingHorizontal: 5,
        },
        logout:{
            borderTopWidth: 3,
            borderColor: '#000',
        },
    }
);
