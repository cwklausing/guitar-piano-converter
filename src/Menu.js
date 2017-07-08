import React from 'react';

function Menu(props) {
	return (
		<nav className="menu">
			<h2>Pick A Chord</h2>
			<select name="chord-root" id="chord-root">
				<option value="E">E</option>
				<option value="F">F</option>
				<option value="G">G</option>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
				<option value="D">D</option>
			</select>
			<select name="chord" id="chord">
				<option value="maj">major</option>
				<option value="min">minor</option>
				<option value="maj-7">major 7th</option>
				<option value="min-7">minor 7th</option>
			</select>
		</nav>
	);
}

export default Menu;
