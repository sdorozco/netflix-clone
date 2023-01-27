import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import { Header } from './Header';
import { List } from './List';
import { Menu } from './Menu';
import { Slider } from './Slider';
import { style } from './style';

const HomeComponent = () => {
	const [isOpen, setOpen] = useState(false);
	const [selectedMenu,setSelectedMenu] = useState('INICIO');
	const toggle = () => {
		setOpen(!isOpen);
	};
	const selectItemMenu = (item) =>{
		setSelectedMenu(item);
		setOpen(!isOpen);
	};

	// eslint-disable-next-line no-shadow
	const updateMenu = (isOpen) => {
		setOpen(isOpen);
	};

	return (
		<View style={style.container}>
			<SideMenu
				overlayColor="black"
				menu={<Menu selectedMenu={selectItemMenu} value={selectedMenu} toggle={toggle} />}
				isOpen={isOpen}
				// eslint-disable-next-line no-shadow
				onChange={(isOpen) => {
					updateMenu(isOpen);
					}}>
				<ScrollView style={style.container}>
					<Header toggle={toggle} />
					<Slider />
					<List genero={selectedMenu} />
				</ScrollView>
			</SideMenu>
		</View>
	);
};

export default HomeComponent;
