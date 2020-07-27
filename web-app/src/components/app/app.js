import React, { Component }from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import styled from 'styled-components';

const AppBlock = styled.div` 
	margin: 0 auto;
	max-width: 800px;
`;




const count = {
	entries: "5",
	likedEntries: "2"
};

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{id: 1,label: "Write letter", important: false, like: false},
				{id: 2,label: "Make application", important: false, like: false},
				{id: 3,label: "Run 10km", important: false, like: false}
			],
			term: '',
			filter: 'all'
		};

		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.toggleImportant = this.toggleImportant.bind(this);
		this.toggleLiked = this.toggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
	}

	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.label.indexOf(term) > -1;
		});
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	}

	deleteItem(id) {
		this.setState(({ data }) => {

			let index = data.findIndex((elem) => elem.id === id);

			const updatedArr = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: updatedArr
			};
		});
	}

	addItem(body) {
		const newItem = {
			id: nextId(),
			label: body,
			important: false,
			like: false
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];

			return {
				data: newArr
			};
		});
	}

	toggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(item => item.id === id);

			const newItem = data[index];
			newItem.important = !data[index].important;

			const updatedArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: updatedArr
			};
		});
	}

	toggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(item => item.id === id);

			const newItem = data[index];
			newItem.like = !data[index].like;

			const updatedArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: updatedArr
			};
		});
	}

	onUpdateSearch(term) {
		this.setState({term});
	}

	onFilterSelect(filter) {
		this.setState({filter});
	}

	render() {
		const { data, term, filter } = this.state;

		let allPosts = data.length,
				likedPosts = data.filter(item => item.like).length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<AppBlock>
				<AppHeader allPosts={allPosts} likedPosts={likedPosts}/>

				<div className="search-panel d-flex">
					<SearchPanel 
						onUpdateSearch={this.onUpdateSearch}/>
					<PostStatusFilter 
						filter={filter} 
						onFilterSelect={this.onFilterSelect} />
				</div>
				<PostList 
					posts={visiblePosts} 
					onDelete={this.deleteItem}
					onToggleImportant={this.toggleImportant} 
					onToggleLiked={this.toggleLiked} />

				<PostAddForm onAdd={this.addItem} />
			</AppBlock>
		)
	}
};

