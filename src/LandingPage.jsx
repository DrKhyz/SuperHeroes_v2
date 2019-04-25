import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardGroup, Card, CardImg, CardText, CardBody, Button, Col } from 'reactstrap';
import arenaD from './arenaD.jpg';
import MarvelD from './MarvelD.jpg';

const LandingPage = props => {
	return (
		<div style={{ background: 'black' }}>
			<div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5vh' }}>
				<Col xl='5' lg='5' md='5' sm='8'>
					<CardImg top width='100%' src={MarvelD} alt='Card image cap' />
				</Col>
			</div>
			<CardGroup style={{ marginTop: '5vh' }}>
				<Col xl={{ size: '5', offset: 1 }} lg={{ size: '5', offset: 1 }} md={{ size: '10', offset: 1 }}>
					<Card style={{ border: '1px solid black' }}>
						<CardImg top width='100%' src={arenaD} alt='Card image cap' />

						<CardBody style={{ background: 'black', color: 'white' }}>
							<CardText style={{ textAlign: 'justify' }}>
								Are you ready to fight ? Enter the arena with a random hero and fight your opponent and witness EPIC
								battles throughout a large superhero universe and more!
							</CardText>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<NavLink to='/arena'>
									<Button style={{ backgroundColor: '#ED1D24', border: '1px solid black' }}>Enter the arena</Button>
								</NavLink>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col xl={{ size: '5', offset: 0 }} lg={{ size: '5', offset: 0 }} md={{ size: '10', offset: 1 }}>
					<Card style={{ border: '1px solid black' }}>
						<CardImg
							top
							width='100%'
							src='http://www.wow247.co.uk/wp-content/uploads/2014/09/Avengers-main.jpg'
							alt='Card image cap'
						/>
						<CardBody style={{ background: 'black', color: 'white' }}>
							<CardText style={{ textAlign: 'justify' }}>
								You are more of a carreful type of guy and don't trust your luck ? Search any hero in our card
								collection search bar and control your destiny! Will you beat them all?
							</CardText>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<NavLink to='/selecthero'>
									<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Select your hero</Button>
								</NavLink>
							</div>
						</CardBody>
					</Card>
				</Col>
			</CardGroup>
		</div>
	);
};

export default LandingPage;
