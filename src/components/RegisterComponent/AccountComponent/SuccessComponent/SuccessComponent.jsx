import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { styles } from './style';
import { Badge } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const SuccessComponent = () => {
	const route = useRoute();
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('EndAccount');
		}, 8000);
	}, [navigation]);
	return (
		<View style={styles.container}>
			<HeaderComponent sesion={false} />
			<View style={styles.containerText}>
				<Badge style={styles.bagde}>Cuenta Creada</Badge>
				<Text style={styles.text}>Enhorabuena {route.params.email} , ya casi hemos terminado entra a netflix.com y completa tu suscripción</Text>
			</View>
		</View>
	);
};

export default SuccessComponent;
