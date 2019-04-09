import React from 'react';
import './CardLife.css';
import { Progress } from 'reactstrap';

const CardLife = props => {
	return (
		<div className='card-life'>
			<Progress color='success' value='100' />
		</div>
	);
};

export default CardLife;
