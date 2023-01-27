import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Episodes from './Episodes/Episodes';
import { styles } from './style';
import Thrillers from './Thrillers/Thrillers';

const TabsComponent = ({ episodes }) => {

	const FirstRoute = () => (
		<Episodes episodes={episodes} />
	);
	const SecondRoute = () => (
		<Thrillers />
	);
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: '1', title: 'Episodes' },
		{ key: '2', title: 'Thrillers & More' },
	]);

	return (
		<TabView
			style={styles.container}
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={SceneMap({
				1: FirstRoute,
				2: SecondRoute,
			})}
			overScrollMode="always"
			initialLayout={{ width: Dimensions.get('window').width }}
		/>
	);
};

export default TabsComponent;
