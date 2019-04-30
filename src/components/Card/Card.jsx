import React from 'react';
import Background from './Background/Background';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';
import './Card.css';

const Card = props => {
	return (
		<div>
			<div className='bckg'>
				<Background {...props} />
			</div>
			<div className='nlstrsts col-12'>
				<div className='clife'>
					<CardLife {...props} />
				</div>
				<div className='cn'>
					<CardName {...props} />
				</div>

				<div className='cstr'>
					<CardStars {...props} />
				</div>
				<div className='csts'>
					<CardStats {...props} />
				</div>
			</div>
		</div>
	);
};

export default Card;
