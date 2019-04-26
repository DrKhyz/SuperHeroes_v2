import React from 'react';
import './CardName.css';
import { Col } from 'reactstrap';

const CardName = props => {
	return (
		<Col
			xl={{ offset: 3 }}
			lg={{ offset: 3 }}
			md={{ offset: 2 }}
			sm={{ offset: 2 }}
			xs={{ offset: 2 }}
			style={{ padding: '0' }}
		>
			<p className='card_Name'>{props.name}</p>
		</Col>
	);
};

export default CardName;
