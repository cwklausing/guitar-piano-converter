import React, { Component } from 'react';
import Header from './Header';
import Guitar from './Guitar';
import Piano from './Piano';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: Array(6).fill(null)
		};
	}

	handleClick(stringNumber, noteNumber, instrument) {
		const notes = this.state.notes;
		if (instrument === 'piano' && (stringNumber === 4 && noteNumber === 0) && (notes[4] === 0 || notes[3] === 4)) {
			// Account for double B notes on guitar
			if (notes[4] === 0) {
				notes[4] = null;
			}
			if (notes[3] === 4) {
				notes[3] = null;
			}
		} else if (notes[stringNumber] === noteNumber) {
			notes[stringNumber] = null;
		} else {
			notes[stringNumber] = noteNumber;
		}

		this.setState({
			notes: notes
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<main className="app-main">
					<Guitar
						notes={this.state.notes}
						onClick={(rowNumber, noteNumber, instrument) =>
							this.handleClick(rowNumber, noteNumber, instrument)}
					/>
					<Piano
						notes={this.state.notes}
						onClick={(rowNumber, noteNumber, instrument) =>
							this.handleClick(rowNumber, noteNumber, instrument)}
					/>
				</main>
			</div>
		);
	}
}

export default App;
