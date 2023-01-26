import React from 'react';
import { RegisterComponent } from '@/components/RegisterComponent';
import { View } from 'react-native';
import { styles } from './styles';

const RegisterPage = () => {
	return (
		<View style={styles.container}>
			<RegisterComponent />
		</View>
	);
};

export default RegisterPage;
