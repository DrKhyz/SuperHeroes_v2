import React from 'react';

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
			<div className='stars d-flex justify-content-end'>
				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />
			</div>
		);
	}
	if (average >= 20 && average <= 39) {
		return (
			<div className='stars d-flex justify-content-end'>
				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />
			</div>
		);
	}
	if (average >= 40 && average <= 59) {
		return (
			<div className='stars d-flex justify-content-end'>
				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />
			</div>
		);
	}
	if (average >= 60 && average <= 79) {
		return (
			<div className='stars d-flex justify-content-end'>
				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />
			</div>
		);
	}
	if (average >= 80 && average <= 100) {
		return (
			<div className='stars d-flex justify-content-end'>
				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />

				<img className='eachstars' src='https://img.icons8.com/color/32/000000/filled-star.png' alt='star' />
			</div>
		);
	}
	return (
		<div className='stars d-flex justify-content-end'>
			{console.log(average)}
			<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

			<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

			<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

			<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />

			<img className='eachstars' src='https://img.icons8.com/color/32/000000/star.png' alt='star' />
		</div>
	);
};

export default CardStars;
