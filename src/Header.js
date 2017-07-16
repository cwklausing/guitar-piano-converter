import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			menuOpen: true
		};
	}
	handleMenuClick() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}
	render() {
		return (
			<header className="header">
				<div className="header__banner">
					<h1 className="header__title">Guitar & Piano Converter</h1>
					<div className="menu-button" onClick={() => this.handleMenuClick()} />
				</div>
				<Menu
					notes={this.props.notes}
					menuOpen={this.state.menuOpen}
					chordData={this.props.chordData}
					onChange={event => this.props.onChange(event)}
					onClick={this.props.onClick}
					selectedChord={this.props.selectedChord}
				/>
			</header>
		);
	}
}

export default Header;
