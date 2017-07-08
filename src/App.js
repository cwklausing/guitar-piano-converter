import React, { Component } from 'react';
import Header from './Header';
import Guitar from './Guitar';
import Piano from './Piano';
import './App.css';

class App extends Component {
	constructor() {
		const fretNumber = 10;

		super();
		this.state = {
			guitar: {
				E1: Array(fretNumber).fill(null),
				A: Array(fretNumber).fill(null),
				D: Array(fretNumber).fill(null),
				G: Array(fretNumber).fill(null),
				B: Array(fretNumber).fill(null),
				E2: Array(fretNumber).fill(null)
			}
		};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<main className="app-main">
					<Guitar guitar={this.state.guitar} />
					<Piano />
				</main>
			</div>
		);
	}
}

export default App;
