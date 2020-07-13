/*
Calculator
    Display
    NumberPad
        key
        0-9, ., del
    OperationsPad
        key
        +, -, /, *
    Submit
        key
        =
 */

import React from "react";
import DisplayBox from "./DisplayBox";
import NumberPad from "./NumberPad";
import OperationsPad from "./OperationsPad";
import SubmitButton from "./SubmitButton";

export default class calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = { display: "" };

		this.handleClick = this.handleClick.bind(this);
		this.precision = 3;
	}

	handleClick(value) {
		if (value === "del") this.setState({ display: "" });
		else if (value === "=") {
			let expression = encodeURIComponent(this.state.display);
			fetch(
				"https://api.mathjs.org/v4/?expr=" +
					expression +
					"&precision=" +
					this.precision
			)
				.then((response) => response.json())
				.then((body) => this.setState({ display: body }))
				.catch((error) => console.log(error));
		} else this.setState({ display: this.state.display + value });
	}
	render() {
		return (
			<div id='container'>
				<h1>Basic Calculator</h1>

				<div id='calculator'>
					<DisplayBox display={this.state.display} />
					<OperationsPad handleClick={this.handleClick} />
					<NumberPad handleClick={this.handleClick} />
					<SubmitButton handleClick={this.handleClick} />
				</div>
			</div>
		);
	}
}
