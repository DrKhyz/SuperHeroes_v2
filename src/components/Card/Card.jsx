import React, { Component } from 'react';
import Background from './Background/Background';
import CardLife from '../CardLife/CardLife';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';
import './Card.css';

const Card = props => {
	return (
		<div className='cardContainer'>
			<Background image={props.image} />
			<CardName {...props} />
			<CardStats {...props} />
		</div>
	);
};

export default Card;
