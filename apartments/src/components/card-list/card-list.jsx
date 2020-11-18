import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { housesRequested, housesLoaded, housesRejected, uploadHouses } from '../../redux/actions';

import Card from '../card';


function CardList(props) {
	useEffect(() => {
		props.uploadHouses();
	}, []);

	return (
		<>
			<List>
				{
					props 
						? props.houses.map(item => {
							return (
								<li key={item.id}> 
									<Card {...item} />
								</li>
							)
						})
						: null
				}
			</List>
		</>
	)
};


/*
	<List>
			{
				items.map(item => {
					return <Card key={item.id} {...item} />
				})
			}
		</List>
*/

// export default function CardList({ items }) {
// 	return (
// 		<List>
// 			{
// 				items.map(item => {
// 					return <Card key={item.id} {...item} />
// 				})
// 			}
// 		</List>
// 	)
// };

CardList.propTypes = {
	loading: PropTypes.bool,
	houses: PropTypes.array,
	error: PropTypes.bool
};

const List = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;

	@media (max-width: 992px) {
		margin: 0 auto;
		max-width: 90%;
	}

	@media (max-width: 768px) {
		justify-content: center;
	}

	@media (max-width: 375px) {
		max-width: 100%;
	}
`;

const mapStateToProps = ({ houses: { loading, houses, error } }) => ({ loading, houses, error });
const mapDispatchToProps = dispatch => { 
	return {
		housesRequested, 
		housesLoaded, 
		housesRejected, 
		uploadHouses: () => uploadHouses(dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);