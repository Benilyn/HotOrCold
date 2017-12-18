import React from 'react';
import './navigation.css';


export default class Navigation extends React.Component {
	
	render() {
		return (
			<nav >
		        <ul className="navBar">
		        	<li className="aboutGame">
		        		<a href='/about-game'>About Game</a>
		        	</li>
		        	<li className="newGame">
		        		<a 	href='#' 
		        			onClick={this.props.onClickNewGame}>New Game
		        		</a>
		        	</li>
		        </ul>
        	</nav>
		);
	}
};