import React from 'react';
import { Button, View, Text } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

export default class DetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details',
	};

	render() {
		/* 2. Get the param, provide a fallback value if not available */
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Text>itemId: {JSON.stringify(itemId)}</Text>
				<Text>otherParam: {JSON.stringify(otherParam)}</Text>
				<Button
					title="Go to Details... again"
					onPress={() =>
						this.props.navigation.push('Details', {
							itemId: Math.floor(Math.random() * 100),
						})
					}
				/>
				<Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
				<Button title="Go back" onPress={() => this.props.navigation.goBack()} />
			</View>
		);
	}
}
