import React from 'react';

function Guitar(props) {
	const instrument = 'guitar';
	var notes = props.notes;
	var guitarArray = Array(5).fill(null);

	var strings = notes.map((row, rowIndex) => {
		var frets = guitarArray.map((value, index) => {
			var fretClass = 'fret fret-' + index;

			if (notes[rowIndex] === index) {
				fretClass += ' active';
			}

			return (
				<div className={fretClass} key={index} onClick={() => props.onClick(rowIndex, index, instrument)}>
					<div className="dot" />
				</div>
			);
		});
		return (
			<div className={'string string-' + rowIndex} key={rowIndex}>
				{frets}
			</div>
		);
	});

	var frets = guitarArray.map((value, index) => {
		return <div className={'fret-image fret-image-' + index} key={index} />;
	});

	return (
		<div className="guitar">
			<div className="fret-images">
				{frets}
			</div>
			<div className="guitar-neck">
				{strings}
			</div>
		</div>
	);
}

export default Guitar;
