import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Like from '../like';

import apartment from '../../assets/img/apartment.jpg';

export default function Card(props) {
	const { 
		type,
		imgSrc,
		attributes: {
			title,
			rooms,
			address: {
				city,
				street,
				house,
				room
			},
			area,
			unit
		},
		relationships: {
			attributes: {
				first_name,
				last_name,
				middle_name
			}
		}
	} = props;

	return (
		<Content data-type={type}>
			<ImageBlock>
				<img src={imgSrc} alt="apartment" />
			</ImageBlock>
			<Description>
				<Title>
					{title}
				</Title>
				<DescriptionList>
					<ListItem>
						<ListItemCaption>
							Количество комнат:
						</ListItemCaption>
						<span>
							{rooms}
						</span>
					</ListItem>
					<ListItem>
						<ListItemCaption>
							Адрес:
						</ListItemCaption>
						<span>
							{city},
							{street} {house}
							кв. {room}
						</span>
					</ListItem>
					<ListItem>
						<ListItemCaption>
							Площадь:
						</ListItemCaption>
						<span>
							{area} {unit}
						</span>
					</ListItem>
					<ListItem>
						<ListItemCaption>
							Консультант:
						</ListItemCaption>
						<span>
							{last_name} {first_name} {middle_name}
						</span>
					</ListItem>
				</DescriptionList>
			</Description>
			<Like/>
		</Content>
	)
}

Card.propTypes = {
	type: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string,
	rooms: PropTypes.number,
	address: PropTypes.string,
	city: PropTypes.string,
	street: PropTypes.string,
	house: PropTypes.string,
	room: PropTypes.string,
	area: PropTypes.number,
	unit: PropTypes.string,
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	middle_name: PropTypes.string
};

Card.defaultProps = {
	type: 'flat',
	imgSrc: apartment
};

const Content = styled.div`
	margin-top: 40px;
	max-width: 300px;
	height: 500px;
	padding-bottom: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 2%;
	border: 1px solid #999;
	transition: all 0.3s ease 0s;

	&:hover {
		transform: scale(1.05);
		background-color: #fff;
	}

	&:hover h3 {
		color: rgba(0, 0, 0, 1);
	}

	@media (max-width: 375px) {
		margin-top: 30px;
		max-width: 280px;
	}
`;

const ImageBlock = styled.div`
	width: 100%;
	height: 200px;

	& img {
		width: 100%;
		height: 100%;
	}
`;

const Description = styled.div`
	margin-top: 25px;
	padding: 0 10px;
`;

const Title = styled.h3`
	color: rgba(0, 0, 0, 0.8);
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`;

const DescriptionList = styled.ul`
	list-style-type: none;
`;

const ListItem = styled.li`
	margin-top: 5px;
`;

const ListItemCaption = styled.span`
	font-size: 16px;
	font-weight: bold;
`;
