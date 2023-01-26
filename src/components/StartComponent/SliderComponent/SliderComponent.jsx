import slider from '@/data/slider_start.js';
import React, { useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Swiper from 'react-native-swiper/src';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import QuestionModal from '../QuestionModal/QuestionModal';
import { styles } from './style';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const SliderComponent = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const navigation = useNavigation();
	const showModal = () => setVisibleModal(true);
	const hideModal = () => setVisibleModal(false);
	const Slide = props => (
		<View style={styles.container}>
			{/* <Image style={styles.image} source={require('@/assets/slider1.jpg')} /> */}
			<ImageBackground key={props.i} style={styles.image} source={{ uri: props.image }}>
				<View style={styles.containerQuestion}>
					<QuestionModal hideModal={hideModal} visibleModal={visibleModal} />
				</View>
			</ImageBackground>
		</View>
	);

	return (
		<View style={styles.sliderContainer}>
			<View style={styles.sliderContainer}>
				<View style={styles.containerGradient}>
					<LinearGradient colors={['#181818', 'transparent', 'transparent']} style={{ height: 45 }}>
						<HeaderComponent showModal={showModal} visibleModal={visibleModal} />
					</LinearGradient>
				</View>
				<Swiper
					dotColor='white'
					loadMinimalLoader={<ActivityIndicator animating={true} color="white" />}
					loop={false}>

					{
						slider.map((item, i) => <Slide image={item.image} key={i} />)
					}

				</Swiper>
				<View style={styles.buttonContainer}>
					<Button buttonColor="red" textColor="white" style={styles.buttonStyle} onPress={() => navigation.navigate('Register')}>EMPEZAR</Button>
				</View>
			</View>
		</View>
	);
};

export default SliderComponent;
