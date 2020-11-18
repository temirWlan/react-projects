import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export default function Like() {
	let [likeState, setLikeState] = useState(false);
	const polygon = React.createRef();

	const onLike = e => {
		e.preventDefault();

		setLikeState(() => {
			likeState = !likeState
		});

		likeState 
			? polygon.current.style.fill = '#f00'
			: polygon.current.style.fill = '#fff'
	};

	return(
		<Container onClick={onLike}>
			<SvgBlock>
	         <Polygon
	     			points="100 100, 150 150, 200 100, 200 75, 185 60, 165 60, 150 75, 135 60, 115 60, 100 75, 100 100"
	     			ref={polygon}
	     		/>
	     </SvgBlock>
		</Container>
	)
}

Like.defaultProps = {
	liked: false
};

Like.propTypes = {
	liked: PropTypes.bool.isRequired
};

const Container = styled.a`
	cursor: pointer;
	margin:0;
   display:flex;
   align-items:center;
   overflow-y:hidden;
`;

const SvgBlock = styled.svg`
	width: 100px;
	height: 80px;
	
`;

const Polygon = styled.polygon`
	transition: all 0.3s ease 0s;
	transform: scale(0.3);
	stroke-linejoin:miter; 
	stroke:black; 
	stroke-width:5; 
	fill: #fff;
`;