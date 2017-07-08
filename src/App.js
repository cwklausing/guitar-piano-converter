import React, { Component } from 'react';
import Header from './Header';
import Guitar from './Guitar';
import Piano from './Piano';
import './App.css';

class App extends Component {
	constructor() {
		const fretsNumber = 10;

		super();
		this.state = {
			guitar: [
				{
					string: 'E1',
					frets: Array(fretsNumber).fill(null)
				},
				{
					string: 'A',
					frets: Array(fretsNumber).fill(null)
				},
				{
					string: 'D',
					frets: Array(fretsNumber).fill(null)
				},
				{
					string: 'G',
					frets: Array(fretsNumber).fill(null)
				},
				{
					string: 'B',
					frets: Array(fretsNumber).fill(null)
				},
				{
					string: 'E2',
					frets: Array(fretsNumber).fill(null)
				}
			]
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
