import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import { createStackNavigator } from 'react-navigation-stack';

import Index from './pages/index';
import Home from './pages/home';

const Routes = createAppContainer(
	createDrawerNavigator({
		Index,
		Home,
	})
);

export default Routes;
