import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.scss';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

	function isEmpty(obj) {
		for (let i in obj) {
			return true;
		}

		return false;
	};

	const elements = posts.map((item) => {

		if (typeof (item) === 'object' && isEmpty(item)) {
			const { id, ...itemProps } = item;
			return (
				<li key={id} className='list-group-item'>
               <PostListItem 
               	{...itemProps} 
               	onDelete={() => onDelete(id)} 
               	onToggleImportant={() => onToggleImportant(id)}
               	onToggleLiked={() => onToggleLiked(id)}
               	 />
            </li>
			)
		}
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default PostList;