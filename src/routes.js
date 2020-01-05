import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Index from './index';
import Login from './pages/login';
import Registrar from './pages/registrar';

const Routes = createAppContainer(
	createSwitchNavigator({
		Index,
	}),
	createStackNavigator({
		Login,
		Registrar,
	})
);

export default Routes;
