import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    thumbnail: {
        width: width,
        height: 300,
    },
    containerGlobal:{
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#181818',

    }, buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent',
    },
    descriptionContainer: {
        paddingHorizontal: 20,
    },
    subtitle: {
        flexDirection: 'row',
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16,
        textAlign: 'justify',
    },
    subTitleText: {
        marginRight: 20,
    },
    description: {
        marginVertical: 10,
    },
    shareListIcon: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listIcon: {
        height: 25,
    },
    shareIcon: {
        height: 25,
    },
    light: {
        fontWeight: '200',
    },
    nameContainer: {
        backgroundColor: 'transparent',
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white',
    },
    closeButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 10,
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerSeason:{
        backgroundColor: '#181818',
        paddingVertical: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 60,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 15,
    },
    iconDown: {
        marginLeft: 5,
    },
    animatedButton: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    offAnimated: {
        backgroundColor: 'transparent',
    },
    containerSeason: {
        width: Dimensions.get('window').width,
        paddingLeft:10,
        paddingRight:10,
    },
    dropdown2BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#444',
        borderRadius: 8,
      },
      dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      dropdown2DropdownStyle: {
        backgroundColor: '#444',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
      dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
      },
// eslint-disable-next-line eol-last
});