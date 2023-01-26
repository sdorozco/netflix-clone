import React from 'react';
import { View } from 'react-native';
import { LoginComponent } from '../../components/LoginComponent';
import { styles } from './styles';

const LoginPage = () => {
	return (
		<View style={styles.container}>
			<LoginComponent />
		</View>
	);
};

export default LoginPage;
