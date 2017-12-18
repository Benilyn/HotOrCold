import React from 'react';

export default class GameForm extends React.Component {
	render() {
		return (
			<form className="guessForm" onSubmit={this.props.onSubmitGuess}>
              <input type="number" name="userGuess" />
              <input type="submit" value="Guess" />
          </form>
		);
	}
};