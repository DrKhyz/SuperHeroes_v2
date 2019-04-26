import React from 'react';
import './CardStars.css';
// import SingleFilledStar from './SingleStars/SingleFilledStar';
// import SingleEmptyStar from './SingleStars/SingleEmptyStar';
import { Container, CardImg, Row, Col } from 'reactstrap';

const CardStars = props => {
	let int = parseInt(props.powerstats.intelligence);
	let str = parseInt(props.powerstats.strength);
	let spd = parseInt(props.powerstats.speed);
	let end = parseInt(props.powerstats.durability);
	let pow = parseInt(props.powerstats.power);
	let cbt = parseInt(props.powerstats.combat);
	let average = Math.floor((int + str + spd + end + pow + cbt) / 6);
	if (average >= 0 && average <= 19) {
		return (
			<Container>
				<Col>
					<Row>
						<Col
							style={{ padding: '0' }}
							xl={{ size: 1, offset: 7 }}
							lg={{ size: 1, offset: 7 }}
							md={{ size: 1, offset: 6 }}
							sm={{ size: 1, offset: 6 }}
							xs={{ size: 1, offset: 6 }}
						>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
					</Row>
				</Col>
			</Container>
		);
	}
	if (average >= 20 && average <= 39) {
		return (
			<Container>
				<Col>
					<Row>
						<Col
							style={{ padding: '0' }}
							xl={{ size: 1, offset: 7 }}
							lg={{ size: 1, offset: 7 }}
							md={{ size: 1, offset: 6 }}
							sm={{ size: 1, offset: 6 }}
							xs={{ size: 1, offset: 6 }}
						>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
					</Row>
				</Col>
			</Container>
		);
	}
	if (average >= 40 && average <= 59) {
		return (
			<Container>
				<Col>
					<Row>
						<Col
							style={{ padding: '0' }}
							xl={{ size: 1, offset: 7 }}
							lg={{ size: 1, offset: 7 }}
							md={{ size: 1, offset: 6 }}
							sm={{ size: 1, offset: 6 }}
							xs={{ size: 1, offset: 6 }}
						>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
					</Row>
				</Col>
			</Container>
		);
	}
	if (average >= 70 && average <= 79) {
		return (
			<Container>
				<Col>
					<Row>
						<Col
							style={{ padding: '0' }}
							xl={{ size: 1, offset: 7 }}
							lg={{ size: 1, offset: 7 }}
							md={{ size: 1, offset: 6 }}
							sm={{ size: 1, offset: 6 }}
							xs={{ size: 1, offset: 6 }}
						>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
						</Col>
					</Row>
				</Col>
			</Container>
		);
	}
	if (average >= 80 && average <= 100) {
		return (
			<Container>
				<Col>
					<Row>
						<Col
							style={{ padding: '0' }}
							xl={{ size: 1, offset: 7 }}
							lg={{ size: 1, offset: 7 }}
							md={{ size: 1, offset: 6 }}
							sm={{ size: 1, offset: 6 }}
							xs={{ size: 1, offset: 6 }}
						>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
						<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
							<CardImg
								top
								width='100%'
								src='https://img.icons8.com/color/32/000000/filled-star.png'
								alt='Card image cap'
							/>
						</Col>
					</Row>
				</Col>
			</Container>
		);
	}
	return (
		<Container>
			<Col>
				<Row>
					<Col
						style={{ padding: '0' }}
						xl={{ size: 1, offset: 7 }}
						lg={{ size: 1, offset: 7 }}
						md={{ size: 1, offset: 6 }}
						sm={{ size: 1, offset: 6 }}
						xs={{ size: 1, offset: 6 }}
					>
						<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
					</Col>
					<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
						<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
					</Col>
					<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
						<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
					</Col>
					<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
						<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
					</Col>
					<Col style={{ padding: '0' }} xl='1' lg='1' md='1' sm='1' xs='1'>
						<CardImg top width='100%' src='https://img.icons8.com/color/48/000000/star.png' alt='Card image cap' />
					</Col>
				</Row>
			</Col>
		</Container>
	);
};

export default CardStars;
