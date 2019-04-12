import React from 'react';
import { Table } from 'reactstrap';
import './CardStats.css';

const CardStats = props => {
	console.log(props);

	return (
		<div className='card_stats'>
			<Table>
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
				<div>
					Height : {props.appearance.height[1]} - Weigth: {props.appearance.weight[1]}
				</div>
				<div>Univers : {props.biography.publisher} </div>
			</div>
		</div>
	);
};

export default CardStats;
