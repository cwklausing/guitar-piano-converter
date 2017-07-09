import React from 'react';

class Guitar extends React.Component {
	render() {
		const notes = this.props.notes;
		const strings = notes.map((row, index) => {
			const frets = row.map((value, index) => {
				return <div className={'fret fret-' + index} key={index} />;
			});
			return (
				<div className={'string string-' + index} key={index}>
					{frets}
				</div>
			);
		});
		const frets = this.props.fretImages.map((value, index) => {
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
}

export default Guitar;
