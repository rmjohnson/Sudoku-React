import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class WritingModeControls extends PureComponent {
	static propTypes = {
		currentWritingMode: PropTypes.string.isRequired,
		writingModes: PropTypes.arrayOf(PropTypes.string).isRequired,
		handleChange: PropTypes.func,
	}

	static defaultProps = {
		handleChange: () => {},
	}

	render() {
		const { currentWritingMode, handleChange, writingModes } = this.props;

		const writingModeButtons = writingModes.map(mode => (
			<div className={`writing-mode-controls__${mode} ${currentWritingMode == mode ? `writing-mode-controls__${mode}--active` : ''}`} onClick={() => handleChange(mode)} key={mode} />
		))

		return (
			<div className="writing-mode-controls">
				{writingModeButtons}
			</div>
		);
	}
}