import React, { Component } from 'react';
import Card from './components/Card/Card';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import ButtonFight from './components/Buttons/ButtonFight';
import './App.css';
import { Spinner } from 'reactstrap';
import ImgVS from './components/ImgVS/ImgVS';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
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
					life: ''
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
					life: ''
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
			.then(data =>
				this.setState({
					isLoading: false,
					hero1: {
						id: data.id,
						name: data.name,
						powerstats: {
							intelligence: data.powerstats.intelligence,
							strength: parseInt(data.powerstats.strength),
							speed: data.powerstats.speed,
							durability: data.powerstats.durability,
							power: data.powerstats.power,
							combat: data.powerstats.combat,
							life: parseInt(data.powerstats.durability)
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
				})
			);
	}

	getCaracter2() {
		this.setState({ isLoading: true });
		const getRandomInt2 = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://superheroapi.com/api.php/2427014800851400/${getRandomInt2(720)}`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoading: false,
					hero2: {
						id: data.id,
						name: data.name,
						powerstats: {
							intelligence: data.powerstats.intelligence,
							strength: parseInt(data.powerstats.strength),
							speed: data.powerstats.speed,
							durability: data.powerstats.durability,
							power: data.powerstats.power,
							combat: data.powerstats.combat,
							life: parseInt(data.powerstats.durability)
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

	algoCombat(oldStats) {
		console.log('combat');

		// ----- ALGO COMBAT

		oldStats.hero1.powerstats.life -= oldStats.hero2.powerstats.strength;
		oldStats.hero2.powerstats.life -= oldStats.hero1.powerstats.strength;

		// ---------- TESTS

		console.log(oldStats.hero1.powerstats.life);
		console.log(oldStats.hero2.powerstats.strength);
		console.log(oldStats.hero2.powerstats.life);
		console.log(oldStats.hero1.powerstats.strength);

		// ---------- TESTS

		this.setState({
			hero1: {
				id: oldStats.hero1.id,
				name: oldStats.hero1.name,
				powerstats: {
					intelligence: oldStats.hero1.powerstats.intelligence,
					strength: oldStats.hero1.powerstats.strength,
					speed: oldStats.hero1.powerstats.speed,
					durability: oldStats.hero1.powerstats.durability,
					power: oldStats.hero1.powerstats.power,
					combat: oldStats.hero1.powerstats.combat,
					life: oldStats.hero1.powerstats.life
				},
				biography: {
					...oldStats.hero1.biography
				},
				appearance: {
					gender: oldStats.hero1.appearance.gender,
					race: oldStats.hero1.appearance.race,
					height: oldStats.hero1.appearance.height,
					weight: oldStats.hero1.appearance.weight
				},
				image: oldStats.hero1.image
			},
			hero2: {
				id: oldStats.hero2.id,
				name: oldStats.hero2.name,
				powerstats: {
					intelligence: oldStats.hero2.powerstats.intelligence,
					strength: oldStats.hero2.powerstats.strength,
					speed: oldStats.hero2.powerstats.speed,
					durability: oldStats.hero2.powerstats.durability,
					power: oldStats.hero2.powerstats.power,
					combat: oldStats.hero2.powerstats.combat,
					life: oldStats.hero2.powerstats.life
				},
				biography: {
					...oldStats.hero2.biography
				},
				appearance: {
					gender: oldStats.hero2.appearance.gender,
					race: oldStats.hero2.appearance.race,
					height: oldStats.hero2.appearance.height,
					weight: oldStats.hero2.appearance.weight
				},
				image: oldStats.hero2.image
			}
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
						<ImgVS urlImgVS='https://png2.kisspng.com/sh/c3bb16bcd5fdf9991c1d23fe39929022/L0KzQYm4UMI2N6V6gJH0aYP2gLBuTgZqbJZ0RdlqbXX2PcX2mb1qdqVqhJ9sb4LoPbq6TflvfJZxRdV4cnWweYa0UsUufqQyiNDwLUXldIO3hvQ3bJJrSKk5Lkm2QIWCUckzOWY5SKYEM0K6QImCVsgveJ9s/kisspng-video-games-toy-intel-core-i3-intel-core-i5-25-vs-png-5bd20fd6daf070.9304919215404932708968.png' />
						<ButtonRandomHero
							selectHero={() => {
								this.getCaracter1();
								this.getCaracter2();
							}}
						/>
						<ButtonFight />
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
					<ImgVS urlImgVS='https://png2.kisspng.com/sh/c3bb16bcd5fdf9991c1d23fe39929022/L0KzQYm4UMI2N6V6gJH0aYP2gLBuTgZqbJZ0RdlqbXX2PcX2mb1qdqVqhJ9sb4LoPbq6TflvfJZxRdV4cnWweYa0UsUufqQyiNDwLUXldIO3hvQ3bJJrSKk5Lkm2QIWCUckzOWY5SKYEM0K6QImCVsgveJ9s/kisspng-video-games-toy-intel-core-i3-intel-core-i5-25-vs-png-5bd20fd6daf070.9304919215404932708968.png' />
					<ButtonRandomHero
						selectHero={() => {
							this.getCaracter1();
							this.getCaracter2();
						}}
					/>
					<button onClick={() => this.algoCombat(this.state)} color='danger'>
						Fight !
					</button>
				</div>
				<Card {...this.state.hero2} />
			</div>
		);
	}
}

export default App;
