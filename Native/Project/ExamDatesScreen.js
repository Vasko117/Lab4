import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	Button,
	TextInput,
	StyleSheet,
} from 'react-native';

const ExamDatesScreen = () => {
	const [examDates, setExamDates] = useState([]);
	const [newExamDate, setNewExamDate] = useState('');

	// Initial 5 exam dates when the component mounts
	useEffect(() => {
		setExamDates([
			{ id: '1', subject: 'Math', date: '2023-12-10', time: '10:00 AM' },
			{ id: '2', subject: 'History', date: '2023-12-12', time: '2:00 PM' },
			{ id: '3', subject: 'Physics', date: '2023-12-15', time: '9:30 AM' },
			{ id: '4', subject: 'English', date: '2023-12-18', time: '1:00 PM' },
			{ id: '5', subject: 'Chemistry', date: '2023-12-20', time: '3:30 PM' },
		]);
	}, []);

	const addExamDate = () => {
		if (newExamDate.trim() === '') {
			alert('Please enter a valid exam date.');
			return;
		}

		// Simulate adding an exam date to the local state
		const id = (examDates.length + 1).toString();
		const examDate = {
			id,
			subject: newExamDate,
			date: '2024-01-01',
			time: '12:00 PM',
		};
		setExamDates((prevExamDates) => [...prevExamDates, examDate]);
		setNewExamDate('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Exam Dates</Text>
			<FlatList
				data={examDates}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={styles.examDate}>
						<Text style={styles.subject}>{item.subject}</Text>
						<Text
							style={styles.dateTime}
						>{`${item.date} at ${item.time}`}</Text>
					</View>
				)}
			/>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Enter new exam date"
					value={newExamDate}
					onChangeText={setNewExamDate}
				/>
				<Button title="Add Exam Date" onPress={addExamDate} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	examDate: {
		backgroundColor: '#f0f0f0',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
	},
	subject: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	dateTime: {
		color: '#888',
	},
	inputContainer: {
		marginTop: 16,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 8,
		marginBottom: 8,
	},
});

export default ExamDatesScreen;
