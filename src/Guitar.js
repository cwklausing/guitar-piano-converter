import React from 'react';

class Guitar extends React.Component {
	render() {
		const guitar = this.props.notes;
		const strings = guitar.map((row, index) => {
			const frets = row.map((value, index) => {
				return <div className={'fret fret-' + index} key={index} />;
			});
			return (
				<div className={'string string-' + index} key={index}>
					{frets}
				</div>
			);
		});
		return (
			<div className="guitar">
				<div className="guitar-neck">
					{strings}
				</div>
			</div>
		);
	}
}

export default Guitar;
