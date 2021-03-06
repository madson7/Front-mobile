import React from 'react';
import { Button } from 'react-native';

import { StyledView, StyledImage, ViewButton } from './styles';

const indexScreen = ({ navigation }) => (
	<StyledView>
		<StyledImage source={require('../../../assets/Logo.png')} />
		<ViewButton>
			<Button title="Login" onPress={() => navigation.navigate('Login')} />
		</ViewButton>
		<ViewButton>
			<Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
		</ViewButton>
	</StyledView>
);

indexScreen.navigationOptions = {
	title: 'Index',
	headerStyle: {
		backgroundColor: '#219653',
	},
	headerTintColor: '#000000',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};

export default indexScreen;
