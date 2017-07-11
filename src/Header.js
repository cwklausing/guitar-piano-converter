import React from 'react';
import Menu from './Menu';

function Header(props) {
	return (
		<header className="header">
			<h1 className="header__title">Guitar and Piano Converter</h1>
			<h2 className="header__description">
				Click on the piano or guitar to see a conversion on the other instrument
			</h2>
			<Menu
				notes={props.notes}
				chordData={props.chordData}
				onChange={event => props.onChange(event)}
				onClick={props.onClick}
				selectedChord={props.selectedChord}
			/>
		</header>
	);
}

export default Header;
