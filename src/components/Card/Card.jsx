import React, { Component } from 'react';
import Background from './Background/Background';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';

const Card = props => {
	return (
		<div>
			<Background image={props.image} />
			<CardLife />
			<CardStars />
			<CardStats {...props} />
			<CardName name={props.name} />
		</div>
	);
};

export default Card;
