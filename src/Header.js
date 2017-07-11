import React from 'react';
import Menu from './Menu';

function Header(props) {
	return (
		<header className="header">
			<h1 className="header__title">Guitar To Piano Converter</h1>
			<Menu notes={props.notes} chordData={props.chordData} />
		</header>
	);
}

export default Header;
