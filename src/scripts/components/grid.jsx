import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Square from './square';

export default class Grid extends PureComponent {
	static propTypes = {
		initialPuzzle: PropTypes.arrayOf(PropTypes.number).isRequired,
		writingMode: PropTypes.string.isRequired,
		gridSize: PropTypes.number,
	}

	static defaultProps = {
		gridSize: 9,
	}

	state = {
		puzzle: [...this.props.initialPuzzle].map(number => ({ number, possibleNumbers: [], given: number !== null })),
	}

	handleSquareChange = (value, index) => {
		const { writingMode } = this.props;
		const newPuzzle = [...this.state.puzzle];
		if (writingMode == 'pen') {
			newPuzzle[index].number = value;
		} else if (writingMode == 'pencil') {
			newPuzzle[index].possibleNumbers = [...newPuzzle[index].possibleNumbers];

			// If the number already exists in the list, let's toggle it off
			const currentPossibleNumbersIndex = newPuzzle[index].possibleNumbers.indexOf(value);
			if (currentPossibleNumbersIndex !== -1) {
				newPuzzle[index].possibleNumbers.splice(currentPossibleNumbersIndex, 1);
			} else {
				newPuzzle[index].possibleNumbers.push(value);
			}
		} else {
			throw new Error(`Unknown writing mode: ${writingMode}`);
		}
		
		this.setState({
			puzzle: newPuzzle
		});
	}
	
	render() {
		const { puzzle } = this.state;
		const { initialPuzzle } = this.props;

		const squares = puzzle.map((square, index) => (
			<Square
				index={index}
				given={square.given}
				handleSquareChange={this.handleSquareChange}
				number={square.number}
				possibleNumbers={square.possibleNumbers}
				key={`square-${index}`}
			/>
		));

		return (
			<div className="grid">
				{squares}
			</div>
		);
	}
}