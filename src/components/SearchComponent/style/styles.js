import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create(
    {
        input: {
            height: 40,
            backgroundColor: '#323232',
            width: '75%',
            marginHorizontal: 10,
            paddingLeft: 30,
            borderRadius: 3,
            color: 'white',
        },
        container: {
            flex: 1,
            backgroundColor: '#181818',
            width,
        },
        header: {
            height: 40,
            backgroundColor: '#181818',
            borderColor: '#3a3a3a',
            borderBottomWidth: 2,
            paddingBottom: 5,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
        },
        searchIcon: {
            position: 'absolute',
            top: 8,
            left: 15,
            zIndex: 1,
            backgroundColor: 'transparent',
        },
        cancelButton: {
            color: 'white',
            marginRight: 10,
            width: '25%',
        },
        containerButton: {
            right:5,
        },
        textCancel: {
            color: 'white',
        },
        iconInputClose: {
            position: 'absolute',
            top: 8,
            right: '25%',
            backgroundColor: 'transparent',
            zIndex: 1,
        },
        flat: {
            marginHorizontal: 5,
        },
        image: {
            width: '33%',
            height: 170,
        },
        wrapperStyle: {
            marginTop: 5,
            marginLeft: 5,
        },
    }
// eslint-disable-next-line eol-last
);