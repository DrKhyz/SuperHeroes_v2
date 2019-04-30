import React from 'react';
import { Progress } from 'reactstrap';

const CardLife = props => {
	return (
		<div className='lifebar'>
			<Progress
				style={{
					minHeight: '3vw',
					maxHeight: '3vw',
				}}
				color={props.powerstats.barColor}
				value={props.powerstats.life}
				max={
					(parseInt(props.powerstats.durability) + parseInt(props.powerstats.intelligence)) *
					(parseInt(props.powerstats.speed) / 10)
				}
			/>
		</div>
	);
};

export default CardLife;
