import * as yup from 'yup';
import { Formik } from 'formik';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import React, { Fragment } from 'react';

import { Container, Container2, StyledView, StyledView2, ViewButton, FormikView, Button } from './styles';

const SignUpScreen = () => (
	<Container>
		<Container2>
			<Button title="Sign In" />
		</Container2>
	</Container>
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
