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

	render() {
		return (
			<div className="App">
				<Header />
				<main className="app-main">
					<Guitar notes={this.state.notes} />
					<Piano />
				</main>
			</div>
		);
	}
}

export default App;
