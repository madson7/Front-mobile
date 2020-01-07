import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Pages/Home/HomeScreen';
import LoginScreen from './Pages/Login/LoginScreen';
import SignUpScreen from './Pages/SignUp/SignUpScreen';

const RootStack = createStackNavigator({
	Home: HomeScreen,
	Login: LoginScreen,
	SignUp: SignUpScreen,

	initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
