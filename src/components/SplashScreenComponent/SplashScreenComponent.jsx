import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './style';

const SplashScreenComponent = () => {
	const navigation = useNavigation();
	//Animation values move..
	const moveLogoN = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoE = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoT = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoF = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoL = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoI = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const moveLogoX = useRef(new Animated.ValueXY({ x: 190, y: 190 })).current;
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			Animated.parallel([
				Animated.timing(
					moveLogoN,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
					}
				),
				Animated.timing(
					moveLogoE,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 100,
					}
				),
				Animated.timing(
					moveLogoT,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 200,
					}
				),
				Animated.timing(
					moveLogoF,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 300,
					}
				),
				Animated.timing(
					moveLogoL,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 400,
					}
				),
				Animated.timing(
					moveLogoI,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 500,
					}
				),
				Animated.timing(
					moveLogoX,
					{
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
						delay: 600,
					}
				),
			]).start();
			setTimeout(() => {
				setLoading(true);
			}, 400);
			setTimeout(() => {
				navigation.navigate('Start');
			}, 2500);
		}, 500);
	}, [moveLogoE, moveLogoF, moveLogoI, moveLogoL, moveLogoN, moveLogoT, moveLogoX, navigation]);
	return (
		<Animated.View style={styles.container}>
			<Animated.View style={styles.containerImage}>
				<Animated.Image style={[styles.imgLaterales, { transform: [{ translateX: moveLogoN.x }] }]} source={require('@/assets/logo_N.png')} />
				<Animated.Image style={[styles.imgCenter, { transform: [{ translateX: moveLogoE.x }] }]} source={require('@/assets/logo_E.png')} />
				<Animated.Image style={[styles.imgCenter, { transform: [{ translateX: moveLogoT.x }] }]} source={require('@/assets/logo_T.png')} />
				<Animated.Image style={[styles.imgCenter, { transform: [{ translateX: moveLogoF.x }] }]} source={require('@/assets/logo_F.png')} />
				<Animated.Image style={[styles.imgCenter, { transform: [{ translateX: moveLogoL.x }] }]} source={require('@/assets/logo_L.png')} />
				<Animated.Image style={[styles.imgI, { transform: [{ translateX: moveLogoI.x }] }]} source={require('@/assets/logo_I.png')} />
				<Animated.Image style={[styles.imgLaterales, { transform: [{ translateX: moveLogoX.x }] }]} source={require('@/assets/logo_X.png')} />
			</Animated.View>
			<View style={styles.containerLoading}>
				<ActivityIndicator animating={loading} color="red" size={40} />
			</View>
		</Animated.View>
	);
};

export default SplashScreenComponent;
