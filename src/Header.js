import React from 'react';
import Menu from './Menu';

function Header(props) {
	return (
		<header class="header">
			<h1 className="header__title">Guitar To Piano Converter</h1>
			<Menu />
		</header>
	);
}

export default Header;
