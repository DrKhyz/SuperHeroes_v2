import React from 'react';
import { Button } from 'reactstrap';
import './ButtonFight.css';

const ButtonFight = ({ selectOpponent }) => {
	return (
		<div>
			<Button color='danger'>Fight !</Button>
		</div>
	);
};

export default ButtonFight;
