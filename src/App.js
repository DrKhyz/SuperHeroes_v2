import React, { Component } from 'react';
import Card from './components/Card/Card';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import AlgoCombat from './AlgoCombat';
import './App.css';
import { Spinner, Button } from 'reactstrap';
// import ImgVS from './components/ImgVS/ImgVS';
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
		if (this.state.isLoading) {
			return (
				<div className='cardDisplay'>
					<p>
						<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
					</p>
					<div className='buttonDisplay'>
						{/* <ImgVS urlImgVS='http://www.sclance.com/pngs/vs-png/vs_png_1474185.png' /> */}
						<ButtonRandomHero
							selectHero={() => {
								this.getCaracter1();
								this.getCaracter2();
							}}
						/>
						<button color='danger'>Fight !</button>
						<NavLink to='/'>
							<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Back to landing page</Button>
						</NavLink>
					</div>
					<p>
						<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
					</p>
				</div>
			);
		}
		return (
			<div className='cardDisplay'>
				<Card {...this.state.hero1} />
				<div className='buttonDisplay'>
					{/* <ImgVS urlImgVS='http://www.sclance.com/pngs/vs-png/vs_png_1474185.png' /> */}
					<ButtonRandomHero
						selectHero={() => {
							this.getCaracter1();
							this.getCaracter2();
						}}
					/>
					{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
						<div>Le gagnant est :{this.state.winner}</div>
					) : (
						<button onClick={() => this.ClickCombat()} color='danger'>
							Fight !
						</button>
					)}
					<NavLink to='/'>
						<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Back to landing page</Button>
					</NavLink>
				</div>
				<Card {...this.state.hero2} />
			</div>
		);
	}
}

export default App;
