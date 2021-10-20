import React, { Component } from 'react';

class Random extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.setState({ number: Math.floor(Math.random() * 10) });
		if (this.number === 7) {
			<h1>You win</h1>;
		} else {
			<button onClick={this.handleClick}>Random Number</button>;
		}
	}

	render() {
		return (
			<div>
				<h1>{this.state.number}</h1>
				{/* {this.state.number === 7 && <h1>You won!</h1>}
				<button onClick={this.handleClick}>Random Number</button> */}
				{this.state.number === 7 ? (
					<h1>You won!</h1>
				) : (
					<button onClick={this.handleClick}>Random Number</button>
				)}
			</div>
		);
	}
}

export default Random;
