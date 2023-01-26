import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';
const HeaderComponent = ({ showModal, hideModal, visibleModal }) => {
	const [visibleMenu, setVisibleMenu] = useState(false);

	const openMenu = () => setVisibleMenu(true);
	const closeMenu = () => setVisibleMenu(false);
	const navigation = useNavigation();
	return (
		<Provider>
			<View style={styles.container}>
				<Image style={styles.image} source={require('@/assets/logo_transparent.png')} />
				<Text style={styles.text}>PRIVACIDAD</Text>
				<TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}><Text style={styles.text}>INICIAR SESIÓN</Text></TouchableWithoutFeedback>
				<Menu
					visible={visibleMenu}
					onDismiss={closeMenu}
					anchor={<TouchableWithoutFeedback onPress={openMenu}>
						<Icon
							name="ellipsis-v"
							color="#b2b2b2"
							size={18}
							style={styles.icon}
						/>
					</TouchableWithoutFeedback>}>
					<Menu.Item onPress={() => {
						setVisibleMenu(false);
						showModal();
					}} title="PREGUNTAS FRECUENTES" />
					<Menu.Item onPress={() => { navigation.navigate('Help'); }} title="AYUDA" />
				</Menu>
			</View>
		</Provider>
	);
};

export default HeaderComponent;
