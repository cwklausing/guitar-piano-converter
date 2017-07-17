import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Guitar from './Guitar';
import Piano from './Piano';
import Footer from './Footer';
import chordData from './data/chords.json';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: Array(6).fill(null),
			menuOpen: true,
			selectedChord: {
				root: false,
				type: false
			}
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

	handleMenuClick() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	handleClear() {
		this.setState({
			notes: Array(6).fill(null),
			selectedChord: {
				root: false,
				type: false
			}
		});
	}

	handleSelect(event) {
		const name = event.target.name;
		var value = event.target.value;
		const selectedChord = this.state.selectedChord;

		if (value === 'false') {
			value = false;
		}

		if (name === 'chord-roots') {
			selectedChord.root = value;
		} else {
			selectedChord.type = value;
		}

		this.setState({
			selectedChord: selectedChord
		});

		this.setSelectedChord();
	}

	setSelectedChord() {
		const selectedRoot = this.state.selectedChord.root;
		const selectedType = this.state.selectedChord.type;
		const chords = chordData.chords;
		var notes = this.state.notes;

		if (selectedRoot && selectedType) {
			for (let i = 0; i < chords.length; i++) {
				if (selectedRoot === chords[i].root && chords[i].type[selectedType] !== undefined) {
					notes = chords[i].type[selectedType];
				}
			}
		}

		this.setState({
			notes: notes
		});
	}

	render() {
		const menuClass = this.state.menuOpen ? '' : ' menu-closed';
		return (
			<div className={'App' + menuClass}>
				<Header onMenuClick={() => this.handleMenuClick()} />
				<Menu
					notes={this.state.notes}
					chordData={chordData}
					onChange={event => this.handleSelect(event)}
					onClick={() => this.handleClear()}
					menuOpen={this.state.menuOpen}
					selectedChord={this.state.selectedChord}
				/>
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
				<Footer />
			</div>
		);
	}
}

export default App;
