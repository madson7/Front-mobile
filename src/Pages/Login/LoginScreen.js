import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => (
	<View style={styles.container}>
		<Text>Login</Text>
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
