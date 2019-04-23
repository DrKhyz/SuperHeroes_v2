import React from 'react';
import './CardName.css';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';

const CardName = props => {
	return (
		<div className='card_Name'>
			<CardLife {...props} />
			<div className='Name_n_Stars'>
				<p className='card_Name_text'>{props.name}</p>
				<CardStars className='stars' {...props} />
			</div>
		</div>
	);
};

export default CardName;
