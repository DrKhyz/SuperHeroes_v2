import React, { Component } from 'react';
import Card from './components/Card/Card.jsx';
import { Button, CardImg, Col, Row, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AlgoCombat from './AlgoCombat';
import Select from './Select.jpg';
class SelectHero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			heroStore: [],
			loadingHeroStore: true,
		};
	}

	ClickCombat = () => {
		let test = AlgoCombat(this.state);
		this.setState(test);
	};

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
			.then(data => this.setState({ heroStore: data.results }))
			.then(this.setState({ loadingHeroStore: false }));
		e.preventDefault();
	};

	selectHero = e => {
		this.setState({
			hero1: {
				id: this.state.heroStore[e.target.id].id,
				name: this.state.heroStore[e.target.id].name,
				powerstats: {
					intelligence: parseInt(this.state.heroStore[e.target.id].powerstats.intelligence),
					strength: parseInt(this.state.heroStore[e.target.id].powerstats.strength),
					speed: parseInt(this.state.heroStore[e.target.id].powerstats.speed),
					durability: parseInt(this.state.heroStore[e.target.id].powerstats.durability),
					power: parseInt(this.state.heroStore[e.target.id].powerstats.power),
					combat: parseInt(this.state.heroStore[e.target.id].powerstats.combat),
					life: Math.floor(
						(parseInt(this.state.heroStore[e.target.id].powerstats.durability) +
							parseInt(this.state.heroStore[e.target.id].powerstats.intelligence)) *
							(this.state.heroStore[e.target.id].powerstats.speed / 10),
					),
					barColor: 'success',
				},
				biography: {
					'full-name': this.state.heroStore[e.target.id].biography['full-name'],
					publisher: this.state.heroStore[e.target.id].biography.publisher,
					alignment: this.state.heroStore[e.target.id].biography.alignment,
				},
				appearance: {
					gender: this.state.heroStore[e.target.id].appearance.gender,
					race: this.state.heroStore[e.target.id].appearance.race,
					height: this.state.heroStore[e.target.id].appearance.height[1],
					weight: this.state.heroStore[e.target.id].appearance.weight[1],
				},
				image: this.state.heroStore[e.target.id].image,
			},
		});
		this.getCaracter2();
	};

	resetHero = () => {
		this.setState({ hero1: null, search: '', heroStore: [] });
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col
						xl={{ size: 4, offset: 4 }}
						lg={{ size: 4, offset: 4 }}
						md={{ size: 4, offset: 4 }}
						sm={{ size: 4, offset: 4 }}
						xs={{ size: 4, offset: 4 }}>
						<CardImg src={Select} alt='Select your hero' />
					</Col>
					<Col
						xl={{ size: 1, offset: 3 }}
						lg={{ size: 1, offset: 3 }}
						md={{ size: 1, offset: 3 }}
						sm={{ size: 1, offset: 3 }}
						xs={{ size: 1, offset: 3 }}>
						<NavLink to='/'>
							<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
						</NavLink>
					</Col>
				</Row>
				<Col
					xl={{ size: 4, offset: 5 }}
					lg={{ size: 4, offset: 4 }}
					md={{ size: 4, offset: 4 }}
					sm={{ size: 4, offset: 4 }}
					xs={{ size: 4, offset: 4 }}
					className='d-flex mt-5'>
					<Row>
						<form onSubmit={this.handleSubmit}>
							<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
							<Button style={{ border: '1px solid black', backgroundColor: '#162CA2' }} type='submit'>
								Submit
							</Button>
						</form>
						<Button style={{ backgroundColor: 'red', border: '1px solid black' }} onClick={this.resetHero}>
							Reset
						</Button>
					</Row>
				</Col>

				{this.state.hero1 && this.state.hero2 ? (
					<div className='d-flex flex-direction-row w-100'>
						<Card {...this.state.hero1} />
						{this.state.hero1.powerstats.life <= 0 || this.state.hero2.powerstats.life <= 0 ? (
							<div>Le gagnant est :{this.state.winner}</div>
						) : (
							<Button onClick={() => this.ClickCombat()} color='danger'>
								Fight !
							</Button>
						)}
						<Card {...this.state.hero2} />
					</div>
				) : (
					<div>
						{this.state.loadingHeroStore
							? ''
							: this.state.heroStore.map((heroProps, i) => (
									<div onClick={this.selectHero} key={i} id={i}>
										<Card {...heroProps} />
									</div>
							  ))}
					</div>
				)}
			</Container>
		);
	}
}

export default SelectHero;
