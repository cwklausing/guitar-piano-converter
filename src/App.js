import React, { Component } from 'react';
import Header from './Header';
import Guitar from './Guitar';
import Piano from './Piano';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main className="app-main">
					<Guitar />
					<Piano />
				</main>
			</div>
		);
	}
}

export default App;
