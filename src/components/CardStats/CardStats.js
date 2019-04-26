import React from 'react';
import { Table, Col } from 'reactstrap';
import './CardStats.css';

const CardStats = props => {
	return (
		<Col
			xl={{ size: 10, offset: 2 }}
			lg={{ size: 10, offset: 2 }}
			md={{ size: 10, offset: 1 }}
			sm={{ size: 10, offset: 1 }}
			xs={{ size: 10, offset: 1 }}
		>
			<div className='card_stats'>
				<Table size='sm'>
					<thead>
						<tr>
							<th>INT</th>
							<th>STR</th>
							<th>SPD</th>
							<th>END</th>
							<th>POW</th>
							<th>CBT</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.powerstats.intelligence}</td>
							<td>{props.powerstats.strength}</td>
							<td>{props.powerstats.speed}</td>
							<td>{props.powerstats.durability}</td>
							<td>{props.powerstats.power}</td>
							<td>{props.powerstats.combat}</td>
						</tr>
					</tbody>
				</Table>
				<div>
					<div>Full-name: {props.name} </div>
					<div>Alignement : {props.biography.alignment}</div>
					<div>Univers : {props.biography.publisher} </div>
				</div>
			</div>
		</Col>
	);
};

export default CardStats;
