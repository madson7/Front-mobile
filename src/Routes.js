import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';

const RootStack = createStackNavigator({
	Home: HomeScreen,
	Login: LoginScreen,

	initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
