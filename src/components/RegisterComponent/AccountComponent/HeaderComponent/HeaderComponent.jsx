import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const HeaderComponent = ({ sesion }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.header}>
			<Image style={styles.image} source={require('@/assets/Netflix-logo.png')} />
			<TouchableOpacity onPress={() => navigation.navigate('Help')}>
				<Text style={styles.text}>AYUDA</Text>
			</TouchableOpacity>
			{
				sesion === true ? <TouchableOpacity onPress={() => navigation.navigate('Start')}>
					<Text style={styles.text}>CERRAR SESION</Text>
				</TouchableOpacity> : <TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={styles.text}>INICIAR SESIÓN</Text>
				</TouchableOpacity>
			}
		</View>
	);
};

export default HeaderComponent;
