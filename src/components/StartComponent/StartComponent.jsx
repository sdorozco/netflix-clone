import React from 'react';
import { View } from 'react-native';
import SliderComponent from './SliderComponent/SliderComponent';
import { styles } from './style';

const StartComponent = () => {
	return (
		<View style={styles.container}>
			<SliderComponent />
		</View>
	);
};

export default StartComponent;
