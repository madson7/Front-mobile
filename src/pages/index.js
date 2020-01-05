import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>index</Text>
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

App.navigationOptions = {
	title: 'Painel',
	headerStyle: {
		backgroundColor: '#7159c1',
	},
};
