import React from 'react';
import './CardStars.css';
import SingleFilledStar from './SingleStars/SingleFilledStar';
import SingleEmptyStar from './SingleStars/SingleEmptyStar';

const CardStars = (props) => {
	let int = parseInt(props.powerstats.intelligence);
	let str = parseInt(props.powerstats.strength);
	let spd = parseInt(props.powerstats.speed);
	let end = parseInt(props.powerstats.durability);
	let pow = parseInt(props.powerstats.power);
	let cbt = parseInt(props.powerstats.combat);
	let average = (int + str + spd + end + pow + cbt) / 6;
	if (average >= 0 && average <= 19) {
		return <div className='stars'>
			<SingleFilledStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
		</div>
	}
	if (average >= 20 && average <= 39) {
		return <div className='stars'>
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
		</div>
	}
	if (average >= 40 && average <= 59) {
		return <div className='stars'>
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
		</div>
	}
	if (average >= 60 && average <= 79) {
		return <div className='stars'>
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleEmptyStar />
		</div>
	}
	if (average >= 80 && average <= 100) {
		return <div className='stars'>
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
			<SingleFilledStar />
		</div>
	}
	return (
		<div className='stars'>
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
			<SingleEmptyStar />
		</div>
	)
};

export default CardStars;