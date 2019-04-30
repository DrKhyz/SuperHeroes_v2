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
			<div className='backgroundStyle'>
				<Background {...props} />
			</div>

			<div className='clifeStyle '>
				<CardLife {...props} />
			</div>
			<div className='nameStyle'>
				<CardName {...props} />
			</div>

			<div className='starsStyle'>
				<CardStars {...props} />
			</div>
			<div className='statsStyle'>
				<CardStats {...props} />
			</div>
		</div>
	);
};

export default Card;
