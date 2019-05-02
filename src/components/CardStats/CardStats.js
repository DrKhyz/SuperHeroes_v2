import React from 'react';

const CardStats = props => {
	return (
		<div className='cardstats'>
			<table style={{ width: '100%' }}>
				<thead>
					<tr style={{ color: 'orange' }}>
						<th>INT</th>
						<th>STR</th>
						<th>SPD</th>
						<th>END</th>
						<th>POW</th>
						<th>CBT</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{ color: 'yellow' }}>
						<td>{props.powerstats.intelligence}</td>
						<td>{props.powerstats.strength}</td>
						<td>{props.powerstats.speed}</td>
						<td>{props.powerstats.durability}</td>
						<td>{props.powerstats.power}</td>
						<td>{props.powerstats.combat}</td>
					</tr>
				</tbody>
			</table>
			<div style={{ color: 'grey' }}>
				<div>Full-name: {props.name} </div>
				<div>Alignement : {props.biography.alignment}</div>
				<div>Univers : {props.biography.publisher} </div>
			</div>
		</div>
	);
};

export default CardStats;
