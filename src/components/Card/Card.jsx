import React, { Component } from 'react';
import Background from './Background/Background';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';
import CardStats from '../CardStats/CardStats';

const Card = props => {
	return (
		<div>
			<Background image={props.image} />
			<CardLife />
			<CardStars />
			<CardStats {...props} />
		</div>
	);
};

export default Card;
