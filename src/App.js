import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import GameForm from './components/game-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        guessList: []
    }
    this.submitGuess = this.handleSubmit.bind(this);
    this.newGame = this.handleNewGame.bind(this);
  }

  handleSubmit(event) {
    this.setState({guessList: [...this.state.guessList, event.target.userGuess.value]});
    event.target.userGuess.value = '';
    event.preventDefault();
  }

  handleNewGame() {
    const secretNumber = Math.floor(Math.random()*100)+1;
    this.setState({guessList: []});
    console.log(secretNumber);
  }

  render() {
      const guessList = this.state.guessList.map((guess, index) =>
        <li key={index}>
          {guess}
        </li>
      );

      return (
        <div className="App">
          <header>
            <Navigation onClickNewGame={this.newGame}/>
            <h1 className="App-title">HOT or COLD</h1>
          </header>
          
          <div className="guessGame">
            <h2>Make your Guess</h2>
            <GameForm type="list" onSubmitGuess={this.submitGuess}/>
              
            <p># of Guess:
                <span className="guess-count">{guessList.length}</span>
            </p>
            <ul className="guess-list">{guessList}</ul>
          </div> 

        </div> //className="App"
      );
  }
}

export default App;
