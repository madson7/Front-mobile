import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Bem-vindos</Text>
			<Button title="Entrar" />
			<Button title="Registrar" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
