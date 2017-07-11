import React from 'react';

function Guitar(props) {
	const instrument = 'guitar';
	const notes = props.notes;
	const guitarArray = Array(5).fill(null);
	const fretArray = Array(4).fill(null);

	const strings = notes.map((row, rowIndex) => {
		const frets = guitarArray.map((value, index) => {
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

	const frets = fretArray.map((value, index) => {
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
