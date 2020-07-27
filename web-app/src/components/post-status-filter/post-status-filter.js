import React, { Component } from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component{
	constructor(props) {
		super(props);

		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'like', label: 'Понравилось'}
		];
	}

	render() {
		const { filter, onFilterSelect } = this.props;

		const buttons = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const colorType = active ? 'info' : 'outline-secondary';

			return <Button 
							key={name} 
							color={colorType}
							onClick={() => onFilterSelect(name)}
							>{label}</Button>
		});

		return (
			<div className="btn-group">
					{buttons}
			</div>
	)
	}
}
