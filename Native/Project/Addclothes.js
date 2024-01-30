import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';

const ClothesList = () => {
	const [clothes, setClothes] = useState([
		{ id: '1', name: 'T-shirt' },
		{ id: '2', name: 'Jeans' },
		{ id: '3', name: 'Sweater' },
	]);

	const [editingItem, setEditingItem] = useState(null);
	const [newClothName, setNewClothName] = useState('');

	const handleAddCloth = () => {
		if (newClothName.trim() !== '') {
			setClothes([
				...clothes,
				{ id: Math.random().toString(), name: newClothName },
			]);
			setNewClothName('');
		}
	};

	const handleDeleteCloth = (id) => {
		setClothes(clothes.filter((item) => item.id !== id));
	};

	const handleEditCloth = (id) => {
		const editedClothes = clothes.map((item) =>
			item.id === id ? { ...item, name: newClothName } : item
		);
		setClothes(editedClothes);
		setEditingItem(null);
		setNewClothName('');
	};

	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<Text style={styles.itemText}>{item.name}</Text>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={[styles.button, styles.addButton]}
					onPress={() => setEditingItem(item.id)}
				>
					<Text style={styles.buttonText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.deleteButton]}
					onPress={() => handleDeleteCloth(item.id)}
				>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.questionText}>Select your clothes:</Text>
			<FlatList
				data={clothes}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>

			{/* Input and buttons for adding and editing  khkhlkhlklkhlkjlkh*/}
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="New Cloth"
					value={newClothName}
					onChangeText={setNewClothName}
				/>
				{editingItem ? (
					<TouchableOpacity
						style={[styles.button, styles.editButton]}
						onPress={() => handleEditCloth(editingItem)}
					>
						<Text style={styles.buttonText}>Save Edit</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={[styles.button, styles.addButton]}
						onPress={handleAddCloth}
					>
						<Text style={styles.buttonText}>Add</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f0f8ff', // Light blue background color
	},
	questionText: {
		color: 'blue',
		fontSize: 18,
		marginBottom: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	itemText: {
		fontSize: 16,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	button: {
		padding: 8,
		borderRadius: 4,
		marginHorizontal: 4,
	},
	addButton: {
		backgroundColor: 'green',
	},
	deleteButton: {
		backgroundColor: 'green',
	},
	editButton: {
		backgroundColor: 'green',
	},
	buttonText: {
		color: 'red',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	input: {
		flex: 1,
		marginRight: 10,
		padding: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
	},
});

export default ClothesList;
