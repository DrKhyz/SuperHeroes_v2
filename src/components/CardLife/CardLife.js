import React from 'react';
import { Progress, Col } from 'reactstrap';

const CardLife = props => {
	return (
		<div className='card_life'>
			<Col
				style={{ padding: '0', zIndex: '-1' }}
				xl={{ size: '10', offset: 2 }}
				lg={{ size: '10', offset: 2 }}
				md={{ size: '8', offset: 2 }}
				sm={{ size: '8', offset: 2 }}
				xs={{ size: '8', offset: 2 }}
			>
				<Progress
					color={props.powerstats.barColor}
					value={props.powerstats.life}
					max={
						(parseInt(props.powerstats.durability) + parseInt(props.powerstats.intelligence)) *
						(parseInt(props.powerstats.speed) / 10)
					}
					style={{ height: '6vh', border: '3px solid black' }}
				/>
			</Col>
		</div>
	);
};

export default CardLife;
