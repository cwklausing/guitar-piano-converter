import React, { Component } from 'react';
import Header from './Header';
import Guitar from './Guitar';
import Piano from './Piano';
import './App.css';

class App extends Component {
	constructor() {
		const fretsNumber = 5;

		super();
		this.state = {
			fretImages: Array(fretsNumber - 1).fill(null),
			notes: [
				Array(fretsNumber).fill(null),
				Array(fretsNumber).fill(null),
				Array(fretsNumber).fill(null),
				Array(fretsNumber).fill(null),
				Array(fretsNumber).fill(null),
				Array(fretsNumber).fill(null)
			]
		};
	}
	handleClick(rowNumber, noteNumber, instrument) {
		const notes = this.state.notes;
		const row = notes[rowNumber];

		if (
			instrument === 'piano' &&
			(rowNumber === 4 && noteNumber === 0) &&
			(notes[4][0] === 'active' || notes[3][4] === 'active')
		) {
			// Account for double B notes on guitar
			if (notes[4][0] === 'active') {
				notes[4].fill(null);
			}
			if (notes[3][4] === 'active') {
				notes[3].fill(null);
			}
		} else if (row[noteNumber] === null) {
			row.fill(null);
			row[noteNumber] = 'active';
		} else {
			row.fill(null);
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
						fretImages={this.state.fretImages}
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
