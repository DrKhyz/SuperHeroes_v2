import React, { Component } from 'react';
import Card from './components/Card/Card.jsx';
<<<<<<< HEAD
import { Button, CardImg, Jumbotron, Container } from 'reactstrap';
=======
import { Button, Col, Row } from 'reactstrap';
>>>>>>> dev
import { NavLink } from 'react-router-dom';
import AlgoCombat from './AlgoCombat';
import Select from './select.png';
import Superheroes from './Superheroes.jpg';

class SelectHero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			heroStore: [],
			loadingHeroStore: true,
		};
		this.myInterval = null;
	}

	ClickCombat = () => {
		let test = AlgoCombat(this.state);
		this.setState(test);
	};

	interval() {
		this.myInterval = setInterval(() => this.ClickCombat(), 1000);
	}

	stopInt() {
		clearInterval(this.myInterval);
	}

	getCaracter2 = () => {
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
									(data.powerstats.speed / 10),
							),
							barColor: 'success',
						},
						biography: {
							'full-name': data.biography['full-name'],
							publisher: data.biography.publisher,
							alignment: data.biography.alignment,
						},
						appearance: {
							gender: data.appearance.gender,
							race: data.appearance.race,
							height: data.appearance.height[1],
							weight: data.appearance.weight[1],
						},
						image: data.image,
					},
				});
			});
	};

	handleChange = e => {
		this.setState({ search: e.target.value });
	};

	handleSubmit = e => {
		this.setState({ loadingHeroStore: true });
		fetch(`https://superheroapi.com/api.php/2427014800851400/search/${this.state.search}`)
			.then(response => response.json())
			.then(data => {
				for (let i = 0; i < data.results.length; i++) {
					if (data.results[i].powerstats.intelligence === 'null') {
						data.results[i].powerstats.intelligence = Math.floor(Math.random() * Math.floor(101));
					}
					if (data.results[i].powerstats.strength === 'null') {
						data.results[i].powerstats.strength = Math.floor(Math.random() * Math.floor(101));
					}
					if (data.results[i].powerstats.speed === 'null') {
						data.results[i].powerstats.speed = Math.floor(Math.random() * Math.floor(101));
					}
					if (data.results[i].powerstats.durability === 'null') {
						data.results[i].powerstats.durability = Math.floor(Math.random() * Math.floor(101));
					}
					if (data.results[i].powerstats.power === 'null') {
						data.results[i].powerstats.power = Math.floor(Math.random() * Math.floor(101));
					}
					if (data.results[i].powerstats.combat === 'null') {
						data.results[i].powerstats.combat = Math.floor(Math.random() * Math.floor(101));
					}
					data.results[i].powerstats.life = Math.floor(
						(parseInt(data.results[i].powerstats.durability) + parseInt(data.results[i].powerstats.intelligence)) *
							(data.results[i].powerstats.speed / 10)
					);
					data.results[i].powerstats.barColor = 'success';
				}
				this.setState({ heroStore: data.results });
				console.log(data.results);
			})
			.then(this.setState({ loadingHeroStore: false }));
		e.preventDefault();
	};

	selectHero = i => {
		this.setState({
			hero1: {
				id: this.state.heroStore[i].id,
				name: this.state.heroStore[i].name,
				powerstats: {
					intelligence: parseInt(this.state.heroStore[i].powerstats.intelligence),
					strength: parseInt(this.state.heroStore[i].powerstats.strength),
					speed: parseInt(this.state.heroStore[i].powerstats.speed),
					durability: parseInt(this.state.heroStore[i].powerstats.durability),
					power: parseInt(this.state.heroStore[i].powerstats.power),
					combat: parseInt(this.state.heroStore[i].powerstats.combat),
					life: Math.floor(
						(parseInt(this.state.heroStore[i].powerstats.durability) +
							parseInt(this.state.heroStore[i].powerstats.intelligence)) *
							(this.state.heroStore[i].powerstats.speed / 10),
					),
					barColor: 'success',
				},
				biography: {
					'full-name': this.state.heroStore[i].biography['full-name'],
					publisher: this.state.heroStore[i].biography.publisher,
					alignment: this.state.heroStore[i].biography.alignment,
				},
				appearance: {
					gender: this.state.heroStore[i].appearance.gender,
					race: this.state.heroStore[i].appearance.race,
					height: this.state.heroStore[i].appearance.height[1],
					weight: this.state.heroStore[i].appearance.weight[1],
				},
				image: this.state.heroStore[i].image,
			},
		});
		this.getCaracter2();
	};

	resetHero = () => {
		this.setState({ clrInt: false });
		this.setState({ hero1: null, search: '', heroStore: [] });
	};

	render() {
		return (
			<div>
				<div className='d-flex'>
					<div className='col-4 offset-4'>
						<CardImg src={Select} alt='Select your hero' />
					</div>
					<div className='offset-3'>
						<NavLink to='/'>
							<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
						</NavLink>
					</div>
				</div>
				<div className='d-flex'>
					<form onSubmit={this.handleSubmit}>
						<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
						<Button style={{ border: '1px solid black', backgroundColor: '#162CA2' }} type='submit'>
							Submit
						</Button>
					</form>
					<Button style={{ backgroundColor: 'red', border: '1px solid black' }} onClick={this.resetHero}>
						Reset
					</Button>
				</div>

				{this.state.hero1 && this.state.hero2 ? (
<<<<<<< HEAD
					<div className='d-flex flex-row justify-content-around mt-5 mb-5'>
						<Card {...this.state.hero1} />
						{this.state.clrInt ? this.stopInt() : console.log('the interval is still working')}
						{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
							<div style={{ color: 'white' }} className='d-flex flex-column justify-content-center align-items-center'>
								The winner is: {this.state.winner}
							</div>
						) : (
							<div className='d-flex align-items-center'>
=======
					<Row>
						<Col xs='4'>
							<Card {...this.state.hero1} />
						</Col>
						<Col xs='4'>
							{this.state.clrInt ? this.stopInt() : console.log('the interval is still working')}
							{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
								<div>Le gagnant est :{this.state.winner}</div>
							) : (
>>>>>>> dev
								<Button onClick={() => this.interval()} color='danger'>
									Fight !
								</Button>
							)}
						</Col>
						<Col xs='4'>
							<Card {...this.state.hero2} />
						</Col>
					</Row>
				) : (
					<Row>
						{this.state.loadingHeroStore
							? ''
							: this.state.heroStore.map((heroProps, i) => (
<<<<<<< HEAD
									<div
										onClick={() => this.selectHero(i)}
										key={i}
										id={i}
										className='d-flex justify-content-center align-items-center'
									>
										<div className='d-flex mt-5 mb-5 justify-content-center align-item-center'>
=======
									<Col key={i} xs='4'>
										<div onClick={() => this.selectHero(i)} key={i} id={i}>
>>>>>>> dev
											<Card {...heroProps} />
										</div>
									</Col>
							  ))}
					</Row>
				)}
			</div>
		);
	}
}

export default SelectHero;
