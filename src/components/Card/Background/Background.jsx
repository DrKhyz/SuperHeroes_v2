import React from 'react';
import './Background.css';
import { Col, CardImg, Card } from 'reactstrap';

const Background = props => {
	return (
		<Col
			style={{ padding: '0' }}
			xl={{ size: 12 }}
			lg={{ size: 12 }}
			md={{ size: 10, offset: 1 }}
			sm={{ size: 10, offset: 1 }}
		>
			<Card style={{ zIndex: -1 }}>
				<CardImg
					onError={e => {
						e.target.onerror = null;
						e.target.src = 'https://image.shutterstock.com/image-vector/404-error-page-not-found-450w-603779531.jpg';
					}}
					src={props.image.url}
					alt='Card image cap'
					xl='12'
				/>
			</Card>
		</Col>
	);
};

export default Background;
