import React, { Component } from 'react';
import CardStats from './components/CardStats/CardStats';
import Card from './components/Card/Card';
import CardStars from './components/CardStars/CardStars';
import CardLife from './components/CardLife/CardLife';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import ButtonFight from './components/Buttons/ButtonFight';
import './App.css';
import { Spinner } from 'reactstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
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
				this.setState({
					isLoading: false,
					picture: data.image.url,
					hero1: data
				});
			});
	}

	getCaracter2() {
		const getRandomInt2 = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};
		fetch(`https://superheroapi.com/api.php/2427014800851400/${getRandomInt2(720)}`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoading: false,
					picture2: data.image.url,
					hero2: data
				});
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div className='cardDisplay'>
					<p>
						It's loading... <br />
						<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
					</p>
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
					</div>
					<p>
						It's loading... <br />
						<Spinner style={{ width: '5rem', height: '5rem' }} color='primary' />
					</p>
				</div>
			);
		}
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
