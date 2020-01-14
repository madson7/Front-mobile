import React, { Component } from 'react';
import { Text, View } from 'react-native';

import api from '../../Services/api';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: '#219653',
		},
		headerTintColor: '#000000',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};

	state = {
		docs: [],
	};

	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('/Teste');
		const { docs } = response.data;
		this.setState({ docs });
	};

	render() {
		return (
			<View>
				<Text>Home</Text>
				{this.state.docs.map(product => (
					<Text key={product._id}>{product.title}</Text>
				))}
			</View>
		);
	}
}
