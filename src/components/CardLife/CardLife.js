import React from 'react';
import styles from './CardLife.module.css';
import { Progress } from 'reactstrap';

const CardLife = props => {
	return (
		<div className={styles.card_life}>
			<Progress color='success' value='100' />
		</div>
	);
};

export default CardLife;
