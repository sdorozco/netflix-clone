import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { styles } from './style';

const EndSuccessComponent = () => {
    const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Home');
		}, 4000);
	}, [navigation]);
	
	return (
		<View style={styles.container}>
			<HeaderComponent sesion={true} />
			<View style={styles.containerText}>
				<Text style={styles.title}>¡Ya casi has terminado!</Text>
				<Text style={styles.description}>Ve a netflix.com para completar la suscripción.{'\n'}
					Como tienes suscripción a Netflix, pudes ver todas las series y peliculas que quieras en la aplicación móvil y en todos tus demás dispositivos.
				</Text>
			</View>
		</View>
	);
};

export default EndSuccessComponent;
