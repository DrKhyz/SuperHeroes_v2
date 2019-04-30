import React from 'react';
import Background from './Background/Background';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';
import './Card.css';

const Card = props => {
	return (
		<div className='cardContainer'>
			<Background {...props} />
			<CardLife {...props} />
			<CardName {...props} />
			<CardStars {...props} />
			<CardStats {...props} />
		</div>
	);
};

export default Card;
