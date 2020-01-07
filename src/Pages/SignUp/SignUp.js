import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => (
	<View style={styles.container}>
		<Text>SignUp</Text>
	</View>
);

LoginScreen.navigationOptions = {
	title: 'SignUp',
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
