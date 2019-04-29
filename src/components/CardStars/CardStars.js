import React from 'react';
import './CardStars.css';
// import SingleFilledStar from './SingleStars/SingleFilledStar';
// import SingleEmptyStar from './SingleStars/SingleEmptyStar';
import { Container, CardImg, Row, Col } from 'reactstrap';

const CardStars = props => {
	let int = parseInt(props.powerstats.intelligence);
	let str = parseInt(props.powerstats.strength);
	let spd = parseInt(props.powerstats.speed);
	let end = parseInt(props.powerstats.durability);
	let pow = parseInt(props.powerstats.power);
	let cbt = parseInt(props.powerstats.combat);
	let average = Math.floor((int + str + spd + end + pow + cbt) / 6);
	if (average >= 0 && average <= 19) {
		return (
			<div className='d-flex justify-content-end'>
				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />
			</div>
		);
	}
	if (average >= 20 && average <= 39) {
		return (
			<div className='d-flex justify-content-end'>
				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />
			</div>
		);
	}
	if (average >= 40 && average <= 59) {
		return (
			<div className='d-flex justify-content-end'>
				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />
			</div>
		);
	}
	if (average >= 70 && average <= 79) {
		return (
			<div className='d-flex justify-content-end'>
				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />
			</div>
		);
	}
	if (average >= 80 && average <= 100) {
		return (
			<div className='d-flex justify-content-end'>
				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />

				<img src='https://img.icons8.com/color/32/000000/filled-star.png' alt='Card image cap' />
			</div>
		);
	}
	return (
		<div className='d-flex justify-content-end'>
			<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

			<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

			<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

			<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />

			<img src='https://img.icons8.com/color/32/000000/star.png' alt='Card image cap' />
		</div>
	);
};

export default CardStars;
