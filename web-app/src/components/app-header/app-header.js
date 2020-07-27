import React from 'react';
import './app-header.css';


const AppHeader = ({ allPosts, likedPosts }) => {
 
	return (
		<div className="app-header d-flex">
			<h1>Temirlan Balgushin</h1>
			<h2 className="">
				{allPosts} записи, из них {likedPosts} понравилось
			</h2>
		</div>
	)
};

export default AppHeader;