import React from 'react';
import styles from './CardLife.module.css';
import { Progress, Container, Row, Col } from 'reactstrap';

const CardLife = props => {
	return (
		<div>
			<Progress
				color='success'
				value={props.powerstats.life}
				max={(parseInt(props.powerstats.durability) + parseInt(props.powerstats.intelligence)) * (parseInt(props.powerstats.speed) / 10)}
				className={styles.card_life}
			/>
		</div>
	);
};

export default CardLife;
