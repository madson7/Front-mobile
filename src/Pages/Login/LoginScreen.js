import * as yup from 'yup';
import { Formik } from 'formik';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import React, { Fragment } from 'react';

import { StyledView, StyledView2, ViewButton, FormikView } from './styles';

const SignUpScreen = () => (
	<StyledView>
		<FormikView>
		<StyledView2>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => Alert.alert(JSON.stringify(values))}
				//onSubmit={({ value }, formikBag) => onSubmit(value, formikBag)}
				validationSchema={yup.object().shape({
					email: yup
						.string()
						.email()
						.required(),
					password: yup
						.string()
						.min(6)
						.required(),
				})}
			>
				{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
					<Fragment>
						<TextInput
							value={values.email}
							onChangeText={handleChange('email')}
							onBlur={() => setFieldTouched('email')}
							placeholder="E-mail"
						/>
						{touched.email && errors.email && (
							<Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
						)}
						<TextInput
							value={values.password}
							onChangeText={handleChange('password')}
							placeholder="Password"
							onBlur={() => setFieldTouched('password')}
							secureTextEntry={true}
						/>
						{touched.password && errors.password && (
							<Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
						)}
						<ViewButton>
							<Button title="Sign In" disabled={!isValid} onPress={handleSubmit} />
							</ViewButton>
					</Fragment>
				)}
			</Formik>
			</StyledView2>
		</FormikView>
	</StyledView>
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
