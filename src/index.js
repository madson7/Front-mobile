import React from 'react';
import { TouchableOpacity } from 'react-native';


import { StyledView, StyledText, StyledButton, StyledButtonText, StyledImage } from './styles';

export default class Index extends React.Component {
	render() {
		return (
			<StyledView>
				<StyledImage source={require('../assets/Logo.png')} />
				<StyledText>Bem-vindos</StyledText>
				<TouchableOpacity>
					<StyledButton>
						<StyledButtonText 
						onPress = {() => this.props.navigation.navigate('Login')} >
							Login
							</StyledButtonText>
					</StyledButton>
				</TouchableOpacity>
				<TouchableOpacity>
					<StyledButton>
						<StyledButtonText>Registrar</StyledButtonText>
					</StyledButton>
				</TouchableOpacity>
			</StyledView>
		);
	}
}