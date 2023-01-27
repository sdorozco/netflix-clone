import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import { styles } from './style';
import { emailRegex } from '@/utilities/references';
const AccountComponent = () => {
	const router = useRoute();
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [textHelp, setTextHelp] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	function showPasswordClick() {
		if (showPassword === true) {
			setShowPassword(false);
		} else {
			setShowPassword(true);
		}
	}
	const [inputs, setInputs] = useState({
		email: router.params.email,
		password: '',
	});
	const validate = () => {
		Keyboard.dismiss();
		let isValid = true;
		if (inputs.password.length <= 5 || inputs.password.length === 0) {
			setVisible(true);
			setTextHelp('La contraseña debe tener minimo 6 caracteres');
			isValid = false;
		}
		if (inputs.email.length > 4 && !emailRegex.test(inputs.email)) {
			setTextHelp('Escribe una dirección de correo válida');
			isValid = false;
		}
		if (inputs.email.length > 1 && inputs.email.length <= 4) {
			setTextHelp('El correo debe tener entre 5 y 50 caracteres');
			isValid = false;
		}
		if (inputs.email.length === 0) {
			setTextHelp('El correo es obligatorio');
			isValid = false;
		}

		if (isValid) {
			setVisible(false);
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				navigation.navigate('SuccessAccount', { email: router.params.email });
			}, 2000);
		}
	};
	const handleOnchange = (text, input) => {
		setInputs(prevState => ({ ...prevState, [input]: text }));
	};

	return (
		<View style={styles.background}>
			<HeaderComponent sesion={false} />
			<View style={styles.container}>
				<View style={styles.inputs}>
					<Text style={styles.textTitle}>¿Te apetece ver series y peliculas sin límite?</Text>
					<Text style={styles.textSubtitle}>Crea una cuenta para informarle sobre Netflix.</Text>
					<TextInput
						label="Correo"
						mode="outlined"
						activeOutlineColor={visible === true ? 'red' : 'green'}
						style={styles.input}
						value={inputs.email}
						autoCapitalize="none"
						onChangeText={text => handleOnchange(text, 'email')}
					/>
					<TextInput
						label="Contraseña"
						mode="outlined"
						autoFocus
						autoCapitalize="none"
						activeOutlineColor={visible === true ? 'red' : 'green'}
						secureTextEntry={!showPassword}
						right={<TextInput.Icon icon={!showPassword ? 'eye' : 'eye-off'} onPress={showPasswordClick} />}
						style={styles.input}
						onChangeText={text => handleOnchange(text, 'password')}
					/>
					<HelperText type="error" visible={visible} style={styles.textHelp}>
						{textHelp}
					</HelperText>
					<Button textColor="white" loading={loading} style={styles.button} onPress={() => validate()}>{loading === false ? 'CONTINUAR' : ''}</Button>
				</View>
			</View>
		</View>
	);
};

export default AccountComponent;
