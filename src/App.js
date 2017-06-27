import React, { Component } from 'react'

import * as actions from './actions.js'

const { setWidthAndHeight } = actions

const Cell = ({ isMine, isFlagged, isRevealed, children, handleCellClick }) =>
	<div
		className={`Cell ${isMine ? 'Cell--mine' : ''}${isFlagged ? 'Cell--flagged' : ''}${isRevealed
			? 'Cell--revealed'
			: ''}`}
		children={children}
		onClick={handleCellClick}
	/>

const Board = ({ children, refCallback }) => <div ref={refCallback} className="Board">{children}</div>

class Sweeper extends Component {
	state = {}
	board = null
	assignBoardRef = node => {
		this.board = node
		const { width, height } = this.board.getBoundingClientRect()
		this.setState(setWidthAndHeight(width, height))
	}

	render() {
		return <Board refCallback={this.assignBoardRef}><Cell>hi</Cell></Board>
	}
}

export default Sweeper
