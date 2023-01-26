import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { List, Divider, Button } from 'react-native-paper';
import list from '@/data/listHelp';
import { useNavigation } from '@react-navigation/native';

const HelpComponent = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
					<Icon
						name="arrow-left"
						size={23}
					/>
				</TouchableOpacity>
				<View style={styles.containerImage}>
					<Image style={styles.image} source={require('@/assets/Netflix-logo.png')} />
				</View>
			</View>
			<View style={styles.lista}>
				<View style={styles.containerText}>
					<Text style={styles.text}>Encontrar ayuda en línea</Text>
				</View>
				{
					list.map((item, i) => (
						<View key={i}>
							<Divider />
							<TouchableOpacity>
							<List.Item
								title={item.title}
								style={styles.itemList}
								left={props => <MaterialIcons
									name={item.icon}
									size={20}
									color="blue"
								/>
								}
							/>
							</TouchableOpacity>
							<Divider />
						</View>
					))
				}
			</View>
			<View style={styles.containerButton}>
				<Text style={styles.textService}>Contactar con el Servicio al cliente de Netflix</Text>
				<Text style={styles.alignText}>Conectaremos la llamada gratuitamente con tu conexión a internet</Text>
				<TouchableOpacity><Button icon="chat" style={styles.button} textColor="white">CHAT</Button></TouchableOpacity>
				<TouchableOpacity><Button icon="phone" style={styles.button} textColor="white">LLAMAR</Button></TouchableOpacity>
			</View>
		</View>
	);
};

export default HelpComponent;
