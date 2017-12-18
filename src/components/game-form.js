import React from 'react';
import './game-form.css';

export default class GameForm extends React.Component {
	render() {
		return (
			<form className="guessForm" onSubmit={this.props.onSubmitGuess}>
              <input 
              		type="number" 
              		name="userGuess"
              		placeholder="Enter your Guess" />
              <input type="submit" value="Guess" />
          </form>
		);
	}
};