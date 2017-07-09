import React from 'react';

function Piano(props) {
	const notes = props.notes;
	const whiteKeys = [0, 1, 3, 5, 7, 8, 10, 12, 13, 15, 17, 19, 20, 22, 24, 25, 27, 29, 31];
	const findKeyColor = keyNumber => {
		for (let i = 0; i < whiteKeys.length; i++) {
			if (whiteKeys[i] === keyNumber) {
				return 'white';
			}
		}
		return 'black';
	};
	const keys = notes.map((section, sectionIndex) => {
		const sectionOffset = sectionIndex * 5;
		const keySection = section.map((value, keyIndex) => {
			const keyNumber = keyIndex + sectionOffset;
			return (
				<div
					className={
						'key key-num-' + keyNumber + ' key-' + findKeyColor(keyNumber) + ' key-section-' + sectionIndex
					}
					key={keyIndex}
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
