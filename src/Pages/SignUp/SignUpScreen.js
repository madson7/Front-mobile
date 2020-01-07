import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => (
	<View style={styles.container}>
		<Text>SignUp</Text>
	</View>
);

SignUpScreen.navigationOptions = {
	title: 'SignUp',
	headerStyle: {
		backgroundColor: '#219653',
	},
	headerTintColor: '#000000',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};
export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
