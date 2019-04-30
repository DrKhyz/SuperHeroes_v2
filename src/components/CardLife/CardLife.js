import React from 'react';
import { Progress } from 'reactstrap';

const CardLife = props => {
	return (
		<div className='card_life'>
			<Progress
				color={props.powerstats.barColor}
				value={props.powerstats.life}
				max={
					(parseInt(props.powerstats.durability) + parseInt(props.powerstats.intelligence)) *
					(parseInt(props.powerstats.speed) / 10)
				}
				style={{ height: '6vh', border: '4px solid black' }}
			/>
		</div>
	);
};

export default CardLife;
