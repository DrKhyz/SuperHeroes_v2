import React, { Component } from 'react';
import Card from './components/Card/Card';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import AlgoCombat from './AlgoCombat';
import './App.css';
import { Spinner, Row, Col, Button, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			winner: '',
			hero1: {
				id: '',
				name: '',
				powerstats: {
					intelligence: '',
					strength: '',
					speed: '',
					durability: '',
					power: '',
					combat: '',
					life: '',
					barColor: ''
				},
				biography: {
					'full-name': '',
					publisher: '',
					alignment: ''
				},
				appearance: {
					gender: '',
					race: '',
					height: '',
					weight: ''
				},
				image: ''
			},
			hero2: {
				id: '',
				name: '',
				powerstats: {
					intelligence: '',
					strength: '',
					speed: '',
					durability: '',
					power: '',
					combat: '',
					life: '',
					barColor: ''
				},
				biography: {
					'full-name': '',
					publisher: '',
					alignment: ''
				},
				appearance: {
					gender: '',
					race: '',
					height: '',
					weight: ''
				},
				image: ''
			}
		};
	}

	ClickCombat() {
		let test = AlgoCombat(this.state);
		this.setState(test);
	}

	componentDidMount() {
		this.getCaracter1();
		this.getCaracter2();
	}

	getCaracter1() {
		this.setState({ isLoading: true });
		const getRandomInt1 = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://superheroapi.com/api.php/2427014800851400/${getRandomInt1(720)}`)
			.then(response => response.json())
			.then(data => {
				if (data.powerstats.intelligence === 'null') {
					data.powerstats.intelligence = Math.floor(Math.random() * Math.floor(101));
					console.log('Stats généré aléatoirement');
				}
				if (data.powerstats.strength === 'null') {
					data.powerstats.strength = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.speed === 'null') {
					data.powerstats.speed = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.durability === 'null') {
					data.powerstats.durability = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.power === 'null') {
					data.powerstats.power = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.combat === 'null') {
					data.powerstats.combat = Math.floor(Math.random() * Math.floor(101));
				}
				this.setState({
					isLoading: false,
					winner: '',
					hero1: {
						id: data.id,
						name: data.name,
						powerstats: {
							intelligence: parseInt(data.powerstats.intelligence),
							strength: parseInt(data.powerstats.strength),
							speed: parseInt(data.powerstats.speed),
							durability: parseInt(data.powerstats.durability),
							power: parseInt(data.powerstats.power),
							combat: parseInt(data.powerstats.combat),
							life: Math.floor(
								(parseInt(data.powerstats.durability) + parseInt(data.powerstats.intelligence)) *
									(data.powerstats.speed / 10)
							),
							barColor: 'success'
						},
						biography: {
							'full-name': data.biography['full-name'],
							publisher: data.biography.publisher,
							alignment: data.biography.alignment
						},
						appearance: {
							gender: data.appearance.gender,
							race: data.appearance.race,
							height: data.appearance.height[1],
							weight: data.appearance.weight[1]
						},
						image: data.image
					}
				});
			});
	}

	getCaracter2() {
		this.setState({ isLoading: true });
		const getRandomInt2 = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://superheroapi.com/api.php/2427014800851400/${getRandomInt2(720)}`)
			.then(response => response.json())
			.then(data => {
				if (data.powerstats.intelligence === 'null') {
					data.powerstats.intelligence = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.strength === 'null') {
					data.powerstats.strength = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.speed === 'null') {
					data.powerstats.speed = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.durability === 'null') {
					data.powerstats.durability = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.power === 'null') {
					data.powerstats.power = Math.floor(Math.random() * Math.floor(101));
				}
				if (data.powerstats.combat === 'null') {
					data.powerstats.combat = Math.floor(Math.random() * Math.floor(101));
				}
				this.setState({
					isLoading: false,
					winner: '',
					hero2: {
						id: data.id,
						name: data.name,
						powerstats: {
							intelligence: parseInt(data.powerstats.intelligence),
							strength: parseInt(data.powerstats.strength),
							speed: parseInt(data.powerstats.speed),
							durability: parseInt(data.powerstats.durability),
							power: parseInt(data.powerstats.power),
							combat: parseInt(data.powerstats.combat),
							life: Math.floor(
								(parseInt(data.powerstats.durability) + parseInt(data.powerstats.intelligence)) *
									(data.powerstats.speed / 10)
							),
							barColor: 'success'
						},
						biography: {
							'full-name': data.biography['full-name'],
							publisher: data.biography.publisher,
							alignment: data.biography.alignment
						},
						appearance: {
							gender: data.appearance.gender,
							race: data.appearance.race,
							height: data.appearance.height[1],
							weight: data.appearance.weight[1]
						},
						image: data.image
					}
				});
			});
	}

	render() {
		return (
			<div>
				<div className='d-flex justify-content-xl-around justify-content-lg-around justify-content-between flex-wrap'>
					{/* CARD */}
					<div className='d-flex justify-content-center col-xl-4 col-lg-3 col-12 mt-md-5 mb-md-5 mt-sm-5 mb-sm-5 mt-5 mb-5'>
						<Card {...this.state.hero1} />
					</div>
					<div className='d-flex flex-column justify-content-around align-items-center col-xl-4 col-lg-2 mt-md-5 mb-md-5 mt-sm-5 mb-sm-5 mt-5 mb-5 pt-5'>
						<div className='d-xl-block d-lg-block d-md-none d-sm-none d-none'>
							<CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' />
						</div>
						<ButtonRandomHero
							selectHero={() => {
								this.getCaracter1();
								this.getCaracter2();
							}}
						/>
						{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
							<div style={{ color: 'white' }}>Le gagnant est :{this.state.winner}</div>
						) : (
							<Button onClick={() => this.ClickCombat()} color='danger'>
								Start fighting !
							</Button>
						)}
						<NavLink to='/'>
							<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
						</NavLink>
					</div>
					{/* CARD */}
					<div className='d-flex justify-content-center col-xl-4 col-lg-3 col-12 col-10 mt-md-5 mb-md-5 mt-sm-5 mb-sm-5 mt-5 mb-5'>
						<Card {...this.state.hero2} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

/* <Col
					xl={{ size: 2, offset: 5 }}
					lg={{ size: 2, offset: 5 }}
					md={{ size: 2, offset: 5 }}
					sm={{ size: 2, offset: 5 }}
					xs={{ size: 2, offset: 5 }}
				>
					<CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' />
				</Col>
				<Row>
					<Col xl={{ size: '4' }} lg={{ size: '4' }} md={{ size: '4' }} sm={{ size: '4' }} xs={{ size: '4' }}>
						<Card {...this.state.hero1} />
					</Col>
					<Col
						xl={{ size: '2', offset: 1 }}
						lg={{ size: '2', offset: 1 }}
						md={{ size: '2', offset: 1 }}
						sm={{ size: '2', offset: 1 }}
						xs={{ size: '2', offset: 1 }}
						className='d-flex flex-column justify-content-around'
					>
						<ButtonRandomHero
							selectHero={() => {
								this.getCaracter1();
								this.getCaracter2();
							}}
						/>
						{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
							<div style={{ color: 'white' }}>Le gagnant est :{this.state.winner}</div>
						) : (
							<Button onClick={() => this.ClickCombat()} color='danger'>
								Fight !
							</Button>
						)}
						<NavLink to='/' className='d-flex justify-content-center'>
							<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
						</NavLink>
					</Col>
					<Col xl={{ size: '4' }} lg={{ size: '4' }} md={{ size: '4' }} sm={{ size: '4' }} xs={{ size: '4' }}>
						<Card {...this.state.hero2} />
					</Col>
				</Row> */
/* <CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' /> */

/*if (this.state.isLoading) {
	return (
		<div>
			<Col
				xl={{ size: 2, offset: 5 }}
				lg={{ size: 2, offset: 5 }}
				md={{ size: 2, offset: 5 }}
				sm={{ size: 2, offset: 5 }}
				xs={{ size: 2, offset: 5 }}
			>
				<CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' />
			</Col>
			<Row>
				<Col
					xl={{ size: 2, offset: 2 }}
					lg={{ size: 2, offset: 2 }}
					md={{ size: 2, offset: 2 }}
					sm={{ size: 2, offset: 2 }}
					xs={{ size: 2, offset: 2 }}
				>
					<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
				</Col>
				<Col
					xl={{ size: '2', offset: 1 }}
					lg={{ size: '2', offset: 1 }}
					md={{ size: '2', offset: 1 }}
					sm={{ size: '2', offset: 1 }}
					xs={{ size: '2', offset: 1 }}
					className='d-flex flex-column justify-content-around'
				>
					<ButtonRandomHero
						selectHero={() => {
							this.getCaracter1();
							this.getCaracter2();
						}}
					/>
					<Button color='danger'>Fight !</Button>
					<NavLink to='/' className='d-flex justify-content-center'>
						<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
					</NavLink>
				</Col>
				<Col
					xl={{ size: 2, offset: 2 }}
					lg={{ size: 2, offset: 2 }}
					md={{ size: 2, offset: 2 }}
					sm={{ size: 2, offset: 2 }}
					xs={{ size: 2, offset: 2 }}
				>
					<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
				</Col>
			</Row>
		</div>
	);
}*/
