import React, { Component } from 'react';
import Background from './Background/Background';
import CardLife from '../CardLife/CardLife';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';
import './Card.css';
import { Spinner, Container, Row, Col } from 'reactstrap';

const Card = props => {
	return (
		<div className='cardContainer'>
			<Background image={props.image} />
			<CardName name={props.name} />
			<CardStats {...props} />
		</div>
	);
};

export default Card;
