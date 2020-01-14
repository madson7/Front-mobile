import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';

import { StyledView, ViewButton } from './styles';

const Form = props => (
	<View>
		<TextInput value={props.values.email} onChangeText={text => props.setFieldValue('email', text)} />

		<TextInput value={props.values.password} onChangeText={text => props.setFieldValue('password', text)} />

		<Button onPress={props.handleSubmit} title="Login" />
	</View>
);

const teste = "withFormik({";/*
	mapPropsToValues: () => ({ email: '', password: '' }),
  
	handleSubmit: (values) => {
	  console.log(values);
	}
  })(Form);*/

const LoginScreen = ({ navigation }) => <StyledView>{teste}</StyledView>;

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
