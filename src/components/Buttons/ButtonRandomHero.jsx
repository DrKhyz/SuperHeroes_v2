import React from 'react';
import { Button } from 'reactstrap';
import './ButtonRandomHero.css';

const ButtonRandomHero = ({ selectHero }) => {
	return (
		<div className='Button_Random'>
			<Button color='primary' onClick={selectHero}>
				Get random hero
			</Button>
		</div>
	);
};
export default ButtonRandomHero;
