import React from 'react';
import { Button } from 'react-native';

import { StyledView, StyledImage, ViewButton } from './styles';

const HomeScreen = ({ navigation }) => (
	<StyledView>
		<StyledImage source={require('../../assets/Logo.png')} />
		<ViewButton>
			<Button title="Login" onPress={() => navigation.navigate('Login')} />
		</ViewButton>
		<ViewButton>
			<Button title="Login" onPress={() => navigation.navigate('Login')} />
		</ViewButton>
	</StyledView>
);

HomeScreen.navigationOptions = {
	title: 'Home',
};

export default HomeScreen;
