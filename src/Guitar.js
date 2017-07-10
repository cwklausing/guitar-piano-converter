import React from 'react';

function Guitar(props) {
	const notes = props.notes;
	const strings = notes.map((row, index) => {
		const rowNum = index;
		const frets = row.map((value, index) => {
			return (
				<div className={'fret fret-' + index} key={index} onClick={() => props.onClick(rowNum, index)}>
					<div className="active-dot" />
				</div>
			);
		});
		return (
			<div className={'string string-' + index} key={index}>
				{frets}
			</div>
		);
	});
	const frets = props.fretImages.map((value, index) => {
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
