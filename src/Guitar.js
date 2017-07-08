import React from 'react';

class Guitar extends React.Component {
	render() {
		const guitar = this.props.guitar;
		const strings = guitar.map((string, index) => {
			const frets = string.frets.map((value, index) => {
				return <div className={'fret fret-' + index} key={index} />;
			});
			return (
				<div className={'string string-' + index} key={index}>
					<div className="string-image" />
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
