import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import GuessSection from './components/guess-section';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        guessList: [],
        secretNumber: Math.floor(Math.random()*100)+1,
        guessFeedback: 'Make your Guess'
    }
    this.submitGuess = this.handleSubmit.bind(this);
    this.newGame = this.handleNewGame.bind(this);
  }

  handleSubmit(event) {
    this.setState({guessList: [...this.state.guessList, event.target.userGuess.value]});
    this.checkNumber(event.target.userGuess.value);
    event.preventDefault();
    event.target.userGuess.value = '';
  }

  handleNewGame() {
    this.setState({
      guessList: [],
      secretNumber: Math.floor(Math.random()*100)+1,
      guessFeedback: 'Make your Guess'
    });
    console.log(this.state.secretNumber);
  }

  checkNumber(userGuess) {
    const difference = Math.abs(userGuess - this.state.secretNumber);
    let guessFeedback;

    if (difference >= 21) {
      guessFeedback = "COLD";
    }
    else if (difference <= 20 && difference >= 11 ) {
      guessFeedback = 'WARM';
    }
    else if (difference <= 10 && difference >= 1) {
      guessFeedback = 'HOT';
    }
    else {
      guessFeedback = 'You got it!!!';
    }
    this.setState({guessFeedback});
  } //checkNumber

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

          <div className="game">
            <GuessSection 
                feedback={this.state.guessFeedback}
                onSubmit={this.submitGuess}
            />
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
