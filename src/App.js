import React, { Component } from 'react';
import CardStats from './components/CardStats/CardStats';
import Card from './components/Card/Card';
import CardStars from './components/CardStars/CardStars';
import CardLife from './components/CardLife/CardLife';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import ButtonFight from './components/Buttons/ButtonFight';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// hero1: { name: '', picture: '' },
			hero1: {
				id: '202',
				name: 'Darkhawk',
				powerstats: { intelligence: '50', strength: '32', speed: '33', durability: '70', power: '74', combat: '64' },
				biography: {
					'full-name': 'Christopher Powell',

					publisher: 'Marvel Comics',
					alignment: 'good'
				},
				appearance: {
					height: ["6'1", '185 cm'],
					weight: ['180 lb', '81 kg']
				},

				image: { url: 'https://www.superherodb.com/pictures2/portraits/10/100/53.jpg' }
			},
			// hero2: { picture: '' }
			hero2: {
				id: '644',
				name: 'Superman',
				powerstats: {
					intelligence: '94',
					strength: '100',
					speed: '100',
					durability: '100',
					power: '100',
					combat: '85'
				},
				biography: {
					'full-name': 'Clark Kent',

					publisher: 'Superman Prime One-Million',
					alignment: 'good'
				},
				appearance: {
					height: ["6'3", '191 cm'],
					weight: ['225 lb', '101 kg']
				},

				image: { url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg' }
			}
		};
	}

	getCaracter1() {
		const getRandomInt = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://www.superheroapi.com/api.php/1241580159334538/${getRandomInt(729)}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ hero1: data });
			});
	}

	getCaracter2() {
		const getRandomInt2 = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://superheroapi.com/api.php/2427014800851400/${getRandomInt2(729)}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ hero2: data });
			});
	}

	render() {
		return (
			<div className='cardDisplay'>
				<Card imgUrl={this.state.hero1.image.url} />
				<div className='buttonDisplay'>
					<ButtonFight />
					<ButtonRandomHero
						selectHero={() => {
							this.getCaracter1();
							this.getCaracter2();
						}}
					/>
					<CardLife />
					<CardStars />
					<CardStats props={this.state.hero1} />
				</div>
				<Card imgUrl={this.state.hero2.image.url} />
			</div>
		);
	}
}

export default App;
