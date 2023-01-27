import questions from '@/data/questions.js';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Modal, Portal, Provider, Text } from 'react-native-paper';
import { styles } from './style';

const QuestionModal = ({ hideModal, visibleModal }) => {
	const [expanded, setExpanded] = useState(true);

	// const handssslePress = () => setExpanded(!expanded);
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
	);
};

export default QuestionModal;
