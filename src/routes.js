import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Index from './index';

const Routes = createAppContainer(
	createSwitchNavigator({
		Index,
	}),
);

export default Routes;
