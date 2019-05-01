import React, { Component } from 'react';
import Card from './components/Card/Card';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import AlgoCombat from './AlgoCombat';
import './App.css';
import { Spinner, Button, CardImg, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btnFightD: false,
			clrInt: true,
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
		this.myInterval = null;
	}

	ClickCombat() {
		let test = AlgoCombat(this.state);
		this.setState(test);
		this.setState({ btnFightD: true });
	}

	interval() {
		this.ClickCombat();
		this.myInterval = setInterval(() => this.ClickCombat(), 1000);
	}

	stopInt() {
		clearInterval(this.myInterval);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	componentDidMount() {
		this.setState({ btnFightD: false });
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
					clrInt: false,
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
					clrInt: false,
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
		if (this.state.isLoading) {
			return (
				<div>
					<div className='d-flex col-12 flex-row'>
						<div className='d-flex col-4 justify-content-center align-items-center'>
							<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
						</div>
						<div className='d-flex flex-column justify-content-around align-items-center col-4'>
							<CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' />
							<ButtonRandomHero
								selectHero={() => {
									this.getCaracter1();
									this.getCaracter2();
									clearInterval(this.myInterval);
									this.setState({ btnFightD: false });
								}}
							/>
							{this.state.clrInt ? this.stopInt() : console.log('the interval is still working')}

							{!this.state.btnFightD ? (
								<div>
									<Button
										className='mb-5 mt-5'
										style={{ fontSize: '2.5vw' }}
										onClick={() => this.interval()}
										color='danger'
									>
										Start fighting !
									</Button>
								</div>
							) : this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
								<div style={{ color: 'gold' }}>Le gagnant est: {this.state.winner}</div>
							) : (
								<div style={{ color: 'gold' }}>Currently fighting</div>
							)}
							<Button style={{ fontSize: '2.5vw' }}>
								<NavLink className='text-decoration-none' to='/'>
									Landing page
								</NavLink>
							</Button>
						</div>
						<div className='d-flex col-4 justify-content-center align-items-center'>
							<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
						</div>
					</div>
					{/* <div className='d-flex justify-content-xl-around justify-content-lg-around justify-content-between flex-wrap'>
						<div className='d-flex justify-content-center col-xl-4 col-lg-3 col-12 mt-md-5 mb-md-5 mt-sm-5 mb-sm-5 mt-5 mb-5'>
							<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
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
							<Button color='danger'>Fight !</Button>
							<NavLink to='/' className='d-flex justify-content-center'>
								<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
							</NavLink>
						</div>
						<div className='d-flex justify-content-center col-xl-4 col-lg-3 col-12 col-10 mt-md-5 mb-md-5 mt-sm-5 mb-sm-5 mt-5 mb-5'>
							<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
						</div>
					</div> */}
				</div>
			);
		}
		return (
			<div className='d-flex col-12 flex-row'>
				<div className='d-flex col-4'>
					<Card {...this.state.hero1} />
				</div>
				<div className='d-flex flex-column justify-content-around align-items-center col-4'>
					<CardImg src='https://ya-webdesign.com/images/street-fighter-vs-logo-png-13.png' alt='fight' />
					<ButtonRandomHero
						selectHero={() => {
							this.getCaracter1();
							this.getCaracter2();
							clearInterval(this.myInterval);
							this.setState({ btnFightD: false });
						}}
					/>
					{this.state.clrInt ? this.stopInt() : console.log('the interval is still working')}

					{!this.state.btnFightD ? (
						<div>
							<Button style={{ fontSize: '2.5vw' }} onClick={() => this.interval()} color='danger'>
								Start fighting !
							</Button>
						</div>
					) : this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
						<div style={{ color: 'gold' }}>Le gagnant est: {this.state.winner}</div>
					) : (
						<div style={{ color: 'gold' }}>Currently fighting</div>
					)}
					<Button style={{ fontSize: '2.5vw' }}>
						<NavLink className='text-decoration-none' to='/'>
							Landing page
						</NavLink>
					</Button>
				</div>
				<div className='d-flex col-4'>
					<Card {...this.state.hero2} />
				</div>
			</div>
		);
	}
}
export default App;
