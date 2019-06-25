import React from 'react';
import { render } from 'react-dom';
import { cube, foo, graph } from './test01.js';


graph.options = {
	color: 'blue',
	thickness: '3px'
};


const App1 = () => (
	<div>
		<h1>React in ASP.NET MVCwhat the flick!</h1>
		<div>Hello React World {graph.options.color}</div>
	</div>
);


class Square extends React.Component {
	render() {
		return (
			<button className="square">
				{this.props.value}
			</button>
		);
	}
}


class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
		const status = 'wtf is going on1';

		return (
			<div>
				<App1 />
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}



class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}


render(<Game />, document.getElementById('app'));