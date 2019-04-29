import React from 'react';
import Background from './Background/Background';
import CardStats from '../CardStats/CardStats';
import CardName from '../CardName/CardName';
import CardStars from '../CardStars/CardStars';
import CardLife from '../CardLife/CardLife';
import { Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import './Card.css';
import Pctr from './pctr.jpeg';

const Card = props => {
	return (
		// <Col xl={{ size: '4' }} lg={{ size: '4' }} md={{ size: '4' }} sm={{ size: '4' }} xs={{ size: '4' }}>
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
		// </Col>
	);
};

export default Card;
