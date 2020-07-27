import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Panel = styled.form` 
	margin-top: 20px;
	display: flex;
`;

const PostLabel = styled.input` 
	width: auto;
	flex-grow: 1;
	margin-right: 3px;
	padding: 5px 12px;
	border: 1px solid #aeaeae;
`;

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.onInputValueChange = this.onInputValueChange.bind(this);
		this.onPostSubmit = this.onPostSubmit.bind(this);
	}

	onInputValueChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	onPostSubmit(event) {
		event.preventDefault();

		this.props.onAdd(this.state.text);
		this.setState({
			text: ''
		});
	}


	render() {
		return (
			<Panel onSubmit={this.onPostSubmit}>
				<PostLabel 
						placeholder="О чем вы думаете сейчас?" 
						type="text"
						onChange={this.onInputValueChange}
						value={this.state.text}
				/>
				<Button outline color="success">
				Добавить</Button>
			</Panel>
		)
	}
};

