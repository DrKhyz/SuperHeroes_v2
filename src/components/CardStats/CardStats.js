import React from 'react';
import { Table } from 'reactstrap';
import './CardStats.css';

class CardStats extends React.Component {
	render() {
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
							<td>100</td>
							<td>100</td>
							<td>100</td>
							<td>100</td>
							<td>100</td>
							<td>100</td>
						</tr>
					</tbody>
				</Table>
				<div>
					<div>Full-name: Profesor X </div>
					<div>Alignement : Good</div>
					<div>Height : Unknow - Weigth: Unknow</div>
					<div>Univers : Unknow </div>
				</div>
			</div>
		);
	}
}

export default CardStats;
