import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { navigation } from 'src/utilities/references';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.toggle()}>
				<Icon name="bars" color="white" size={25} />
			</TouchableOpacity>
			<Image style={styles.logo} source={require('@/assets/Netflix-logo.png')} />
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<Icon name="search" color="white" size={25} />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
