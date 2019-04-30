import React from 'react';
import { Button } from 'reactstrap';
import './ButtonRandomHero.css';

const ButtonRandomHero = ({ selectHero }) => {
	return (
		<div className='Button_Random'>
			<Button style={{ fontSize: '2.5vw' }} color='primary' onClick={selectHero}>
				Random Hero
			</Button>
		</div>
	);
};
export default ButtonRandomHero;
