import React from 'react';
import { Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DetailsScreen from './pages/DetailsScreen';
import LoginScreen from './pages/LoginScreen';

import { StyledView, StyledImage, ViewButton } from './styles';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Bem Vindos',
	};

	render() {
		return (
			<StyledView>
				<StyledImage source={require('../assets/Logo.png')} />
				<ViewButton>
					<Button
						title="Login"
						onPress={() => {
							this.props.navigation.navigate('Login');
						}}
					/>
				</ViewButton>
				<ViewButton>
					<Button
						title="Registrar"
						onPress={() => {
							this.props.navigation.navigate('Login');
						}}
					/>
				</ViewButton>
			</StyledView>
		);
	}
}

const RootStack = createStackNavigator({
	Home: HomeScreen,
	Login: LoginScreen,
	//Details: DetailsScreen,

	initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
