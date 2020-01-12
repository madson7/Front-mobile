import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const LoginScreen = ({ navigation }) => (
	<View style={styles.container}>
		<Button title="Home" onPress={() => navigation.navigate('Home')} />
	</View>
);

LoginScreen.navigationOptions = {
	title: 'Login',
	headerStyle: {
		backgroundColor: '#219653',
	},
	headerTintColor: '#000000',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};
export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
