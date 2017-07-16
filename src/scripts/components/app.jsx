import React, { PureComponent } from 'react';
import Grid from './grid';
import WritingModeControls from './writing-mode-controls';

export default class App extends PureComponent {
	state = {
		currentWritingMode: 'pencil',
		puzzle: [
			null, 	null, 	null, 	9, 		6, 		null, 	8, 		null, 	4,
			4, 		null, 	8,		5, 		null, 	null, 	null, 	2, 		null,
			7, 		null, 	null, 	null,	null, 	null, 	null, 	9, 		null,
			// -------------------------------------------------------------------
			5, 		null, 	null, 	null,	null, 	6, 		7, 		4, 		8,
			null, 	null, 	null, 	null,	null, 	null, 	null, 	null, 	null,
			3, 		4, 		2, 		7,		null, 	null, 	null, 	null, 	9,
			// -------------------------------------------------------------------
			null, 	7, 		null, 	null,	null, 	null, 	null, 	null, 	6,
			null, 	2, 		null, 	null,	null, 	4, 		3, 		null, 	1,
			1, 		null, 	4, 		null,	3, 		5, 		null, 	null, 	null,
		],
		writingModes: ['pen', 'pencil'],
	}

	handleWritingModeChange = (newMode) => {
		this.setState({
			currentWritingMode: newMode,
		});
	}

	render() {
		const { currentWritingMode, puzzle, writingModes } = this.state;

		return (
			<div className="app">
				<Grid initialPuzzle={puzzle} writingMode={currentWritingMode} />
				<WritingModeControls currentWritingMode={currentWritingMode} writingModes={writingModes} handleChange={this.handleWritingModeChange} />
			</div>
		);
	}
}