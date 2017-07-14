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
		<section className="menu-wrap">
			<div className="menu">
				<div className="chord-picker">
					<div className="chord-picker__wrap">
						<select name="chord-roots" value={props.selectedChord.root} onChange={props.onChange}>
							<option value={false}>Key</option>
							{chordRoots}
						</select>
						<select name="chord-types" value={props.selectedChord.type} onChange={props.onChange}>
							<option value={false}>Chord Type</option>
							{chordVariations}
						</select>
						<button className="button-clear" onClick={props.onClick}>Clear</button>
					</div>
				</div>
				<h2 className="menu__description">
					Click on the piano or guitar to see a conversion to the other instrument, or just pick a chord below!
				</h2>
			</div>
		</section>
	);
}

export default Menu;
