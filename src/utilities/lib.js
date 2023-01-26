import _ from 'lodash';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeHtmlTags = text => {
    return _.replace(text, /<[^>]*>/g, "");
};

export const connectionState = (netInfo) => {
    const [state, setState] = false;
    if (netInfo.isConnected && netInfo.isInternetReachable) {
        setState(true);
    } else {
        setState(false);
    }
    return state;
};

export const ShowAlert = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Continuar', onPress: () => console.log('OK Pressed') },
        ]
    );
};
export const setAsyncStorage = async(key,id) =>{
    key === null || id === null ? 'Error, no exite la key o el value' : await AsyncStorage.setItem(key,id);
};

export const getUserAsyncStorage = async(key)=>{
    return key === null ? null : await AsyncStorage.getItem(key);
};