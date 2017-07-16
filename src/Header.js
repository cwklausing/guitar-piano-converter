import React from 'react';

function Header(props) {
	return (
		<header className="header">
			<div className="header__banner">
				<h1 className="header__title">Guitar & Piano Converter</h1>
				<div className="menu-button" onClick={() => props.onMenuClick()}>
					<svg className="icon icon-angle-down"><use xlinkHref="#icon-angle-down" /></svg>
				</div>
			</div>
		</header>
	);
}

export default Header;
