import React from 'react';

function Piano(props) {
	const instrument = 'piano';
	var notes = props.notes;
	var whiteKeys = [0, 1, 3, 5, 7, 8, 10, 12, 13, 15, 17, 19, 20, 21, 23, 25, 26, 28, 30, 32];
	var keyRow = Array(5).fill(null);
	var findKeyColor = keyNumber => {
		for (let i = 0; i < whiteKeys.length; i++) {
			if (whiteKeys[i] === keyNumber) {
				return 'white';
			}
		}
		return 'black';
	};
	var keys = notes.map((section, sectionIndex) => {
		var sectionOffset = sectionIndex * 5;
		var keySection = keyRow.map((i, keyIndex) => {
			var currentNote = notes[sectionIndex];
			var keyNumber = keyIndex + sectionOffset;
			var keyClass =
				'key key-num-' + keyNumber + ' key-' + findKeyColor(keyNumber) + ' key-section-' + sectionIndex;

			if (currentNote === keyIndex) {
				keyClass += ' active';
			} else if ((sectionIndex === 3 && keyIndex === 4) || (sectionIndex === 4 && keyIndex === 0)) {
				// Account for repeat B note on string 3 & 4
				if (notes[3] === 4 || notes[4] === 0) {
					keyClass += ' active';
				}
			}

			return (
				<div
					className={keyClass}
					key={keyIndex}
					onClick={() => props.onClick(sectionIndex, keyIndex, instrument)}
				/>
			);
		});
		return keySection;
	});

	return (
		<div className="piano">
			{keys}
		</div>
	);
}

export default Piano;
