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
			<select name="chord-roots" value={props.selectedChord.root} onChange={props.onChange}>
				<option value={false} />
				{chordRoots}
			</select>
			<select name="chord-types" value={props.selectedChord.type} onChange={props.onChange}>
				<option value={false} />
				{chordVariations}
			</select>
			<button className="button-clear" onClick={props.onClick}>Clear</button>
		</nav>
	);
}

export default Menu;
