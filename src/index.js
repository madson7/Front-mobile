import React from 'react';

import { StyledView, StyledText, StyledButton } from './styles';

export default class Index extends React.Component {
	render() {
		return (
			<StyledView>
				<StyledText>Bem-vindos</StyledText>
				<StyledButton title={"StyledButton"} />
			</StyledView>
		);
	}
}
