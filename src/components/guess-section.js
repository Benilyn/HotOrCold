import React from 'react';
import GameForm from './game-form';
import GuessFeedback from './guess-feedback';

export default class GuessSection extends React.Component {
	render() {
		return (
			<div className="guessSection">
				<GuessFeedback feedback={this.props.feedback}/>
            	<GameForm type="list" onSubmitGuess={this.props.onSubmit}/> 
          	</div> 
		)
	}
}