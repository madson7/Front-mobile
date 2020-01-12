import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './Pages/Index/IndexScreen';
import LoginScreen from './Pages/Login/LoginScreen';
import SignUpScreen from './Pages/SignUp/SignUpScreen';
import HomeScreen from './Pages/Home/HomeScreen';

const RootStack = createStackNavigator({
	Index: IndexScreen,
	Login: LoginScreen,
	SignUp: SignUpScreen,
	Home: HomeScreen,

	initialRouteName: 'Index',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
