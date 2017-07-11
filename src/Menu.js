import React from 'react';

function Menu(props) {
	const chords = props.chordData.chords;
	const chordTypes = props.chordData.chordTypes;
	const chordRoots = chords.map((chordGroup, index) => {
		return <option value={chordGroup['root']} key={index}>{chordGroup['root']}</option>;
	});
	const chordVariations = chordTypes.map((chordType, index) => {
		return <option value={chordType} key={index}>{chordType}</option>;
	});

	return (
		<nav className="menu">
			<h2>Pick A Chord</h2>
			<select name="chord-roots">
				<option value="null" />
				{chordRoots}
			</select>
			<select name="chord-variations">
				<option value="null" />
				{chordVariations}
			</select>
		</nav>
	);
}

export default Menu;
