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
	handleClick(rowNumber, noteNumber) {
		const notes = this.state.notes;
		const row = notes[rowNumber];

		if (row[noteNumber] === null) {
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
						onClick={(rowNumber, noteNumber) => this.handleClick(rowNumber, noteNumber)}
					/>
					<Piano notes={this.state.notes} />
				</main>
			</div>
		);
	}
}

export default App;
