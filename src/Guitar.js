import React from 'react';

class Guitar extends React.Component {
	renderRow(strings) {
		return (
			<div className="string-row">
				<div className="fret" />
			</div>
		);
	}

	render() {
		const guitar = this.props.guitar;
		const strings = guitar.map((string, index) => {
			const frets = string.frets.map((value, index) => {
				return <div className={'fret-' + index} key={index} />;
			});
			return (
				<div className={'string-' + index} key={index}>
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
