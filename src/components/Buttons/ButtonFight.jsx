import React from 'react';
import { Button } from 'reactstrap';
import './Button.css';

const ButtonFight = ({ Fight }) => {
	return (
		<div className='Button_fight'>
			<Button color='danger'>Fight !</Button>
		</div>
	);
};

export default ButtonFight;
