import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Provider, Portal, Modal, Text } from 'react-native-paper';
import { styles } from './style';
import { List } from 'react-native-paper';
import questions from '@/data/questions.js';

const QuestionModal = ({ hideModal, visibleModal }) => {
	const [expanded, setExpanded] = useState(true);

	const handlePress = () => setExpanded(!expanded);
	return (
		<Provider>
			<Portal>
				<Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.containerModal}>
					<ScrollView style={styles.containerScroll}>
						<List.Section title="Preguntas Frecuentes" titleStyle={styles.listSection}>
							{
								questions.map((item, i) => (
									<List.Accordion
										key={i}
										titleStyle={styles.titleList}
										title={item.header}>
										<Text>{item.body}</Text>
									</List.Accordion>
								))
							}
						</List.Section>
					</ScrollView>
				</Modal>
			</Portal>
		</Provider>
		// <View>
		// 	{
		// 		console.log(hideModal)
		// 	}
		// </View>
	);
};

export default QuestionModal;
