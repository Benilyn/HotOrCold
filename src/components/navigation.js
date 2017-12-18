import React from 'react';
import './navigation.css';
import Link from 'react-router-dom';


export default class Navigation extends React.Component {
	
	render() {
		return (
			<nav >
		        <ul className="navBar">
		        	<li className="aboutGame">
		        		<Link to='/about-game'>About Game</Link>
		        	</li>
		        	<li className="newGame">
		        		<Link to='/' 
		        			  onClick={this.props.onClickNewGame}>New Game
		        		</Link>
		        	</li>
		        </ul>
        	</nav>
		);
	}
};