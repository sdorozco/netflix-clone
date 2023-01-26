import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { emailRegex } from '../../utilities/references';
import { styles } from './style';

const RegisterComponent = () => {
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [textHelp, setTextHelp] = useState('');
	const [email, setEmail] = useState('');

	const validate = () => {
		if (emailRegex.test(email)) {
			setLoading(true);
			setVisible(false);
			setTimeout(() => {
				setLoading(false);
				navigation.navigate('AccountRegister', { email: email });
			}, 2000);

		} else {
			setVisible(true);
			setTextHelp('Escribe una dirección de correo válida');
		}
	};
	const handleOnchange = (input) => {
		setEmail(input);
		if (input.length === 0) {
			setVisible(true);
			setTextHelp('El correo es obligatorio');
		}
		if (input.length > 1 && input.length <= 4) {
			setTextHelp('El correo debe tener entre 5 y 50 caracteres');
		}
		if (input.length > 4 && !emailRegex.test(input)) {
			setTextHelp('Escribe una dirección de correo válida');
		}
		if (input.length > 7 && emailRegex.test(input)) {
			setVisible(false);
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon
						name="times"
						color="#b3b3b3"
						size={20}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.inputs}>
				<Text style={styles.textTitle}>¿Quieres ver algo ya?</Text>
				<Text style={styles.textSubtitle}>Escribe tu correo para crear una cuenta de Netflix o iniciar sesión en ella.</Text>
				<TextInput
					label="Correo"
					mode="outlined"
					autoFocus
					autoCapitalize="none"
					style={styles.input}
					activeOutlineColor={visible === true ? 'red' : 'green'}
					onChangeText={text => handleOnchange(text)}
				/>
				<HelperText type="error" visible={visible} style={styles.textHelp}>
					{textHelp}
				</HelperText>
				<Button textColor="white" loading={loading} style={styles.button} onPress={() => validate()}>{!loading ? 'EMPEZAR' : ''}</Button>
			</View>
		</View>

	);
};

export default RegisterComponent;
