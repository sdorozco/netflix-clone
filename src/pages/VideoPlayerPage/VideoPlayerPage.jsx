import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { styles } from './style';

const VideoPlayerPage = () => {
	const navigation = useNavigation();
	const { height } = Dimensions.get('window');
	const [ancho, setAncho] = useState('100%');
	const lanscape = () => {
		setAncho(Dimensions.get('window').width);
	}
	return (
		<View style={styles.container}>
			<VideoPlayer
				source={require('@/video/video.mp4')}
				onBack={() => navigation.goBack()}
				style={{ width: ancho, height: height }}
				onEnterFullscreen={() => lanscape()}
			/>
		</View>
	);
};

export default VideoPlayerPage;
