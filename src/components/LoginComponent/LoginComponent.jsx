import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { emailRegex } from '@/utilities/references';
import { styles } from './style';

const LoginComponent = () => {
	const navigation = useNavigation();
	const [showPassword, setShowPassword] = useState(false);
	const [visible, setVisible] = useState(false);
	const [textHelp, setTextHelp] = useState('');
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});
	function showPasswordClick() {
		if (showPassword === true) {
			setShowPassword(false);
		} else {
			setShowPassword(true);
		}
	}
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
				navigation.navigate('Home');
			}, 2000);
		}
	};
	const handleOnchange = (text, input) => {
		setInputs(prevState => ({ ...prevState, [input]: text }));
	};
	return (
		<View style={styles.container}>
			<View style={styles.containerBack}>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<Icon
						name="arrow-left"
						color="white"
						size={23}
						style={styles.icon}
					/>
				</TouchableWithoutFeedback>
				<Image style={styles.image} source={require('@/assets/Netflix-logo.png')} />
			</View>
			<View style={styles.containerInputs}>
				<TextInput
					label="Correo eléctronico o número de teléfono"
					mode="flat"
					autoFocus
					selectionColor="#000"
					underlineColor="#000"
					activeUnderlineColor="#000"
					style={styles.inputs}
					autoCapitalize="none"
					onChange={(text) => handleOnchange(text, 'email')}
				/>
				<TextInput
					label="Contraseña"
					mode="flat"
					selectionColor="#000"
					underlineColor="#000"
					activeUnderlineColor="#000"
					secureTextEntry={!showPassword}
					right={<TextInput.Icon icon={!showPassword ? 'eye' : 'eye-off'} onPress={showPasswordClick} />}
					style={styles.inputs}
					autoCapitalize="none"
					onChange={(text) => handleOnchange(text, 'password')}
				/>
				<HelperText type="error" visible={visible} style={styles.textHelper}>
					{textHelp}
				</HelperText>
			</View>
			<View style={styles.containerButton}>
				<Button loading={loading} onPress={() => validate()} style={styles.button} mode="outlined" textColor="#fff">
					{loading === false ? 'INICIAR SESIÓN' : ''}
				</Button>
				<View style={styles.buttonHelp}>
					<TouchableOpacity onPress={()=>navigation.navigate('Help')}>
						<Text style={styles.textHelp}>¿Necesitas Ayuda?</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonSuscribe}>
					<TouchableOpacity onPress={() => navigation.navigate('Register')}>
						<Text style={styles.textSuscribe}>¿Todavia sin Netflix? {'\n'}       Suscribete ya.</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default LoginComponent;
