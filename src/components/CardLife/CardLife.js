import React from 'react';
import styles from './CardLife.module.css';
import { Progress, Container, Row, Col } from 'reactstrap';

const CardLife = props => {
	return (
		<div>
			<Progress
				color='success'
				value={props.powerstats.life}
				max={props.powerstats.durability}
				className={styles.card_life}
			/>
		</div>
	);
};

export default CardLife;
