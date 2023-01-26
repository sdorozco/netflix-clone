import React from 'react';
import { Image, View } from 'react-native';
import sliderImage from '@/data/slider';
import { styles } from './style';
import Swiper from 'react-native-swiper/src';

const Slider = () => {

	const Slide = props => (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: props.uri }} />
		</View>
	);

	return (
		<View style={styles.sliderContainer}>
			<Swiper
				autoplay
				height={240}>
				{
					sliderImage.map((item, i) => <Slide uri={item.image} key={i} />)
				}
			</Swiper>
		</View>
	);
};

export default Slider;
