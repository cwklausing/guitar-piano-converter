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
		const strings = this.props.guitar;
		console.log(strings);
		return (
			<div className="guitar">
				<div className="guitar-neck">
					{}
				</div>
			</div>
		);
	}
}

export default Guitar;
