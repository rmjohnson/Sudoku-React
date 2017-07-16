import PropTypes from 'prop-types';
import React,  { PureComponent } from 'react';

export default class Square extends PureComponent {
	static propTypes = {
		index: PropTypes.number.isRequired,
		given: PropTypes.bool,
		handleChange: PropTypes.func,
		number: PropTypes.number,
		possibleNumbers: PropTypes.arrayOf(PropTypes.number),
	}

	static defaultProps = {
		given: false,
		handleChange: () => {},
		number: null,
		possibleNumbers: [],
	}

	render() {
		const { index, given, handleChange, number, possibleNumbers } = this.props;
		const numberElement = given
			? number
			: (<input type="text" value={number || ''} onChange={e => handleChange(parseInt(e.target.value.slice(-1)), index)} />);

		const possibleNumbersElement = [...new Set(possibleNumbers)]
			.sort()
			.map(n => (<div key={n}>{n}</div>));

		return (
			<div className={`grid__square ${given ? 'grid__square--given' : ''}`}>
				<div className="grid__square__possible-numbers">
					{!number && possibleNumbersElement}
				</div>
				{numberElement}
			</div>
		);
	}
}