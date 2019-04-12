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
			isLoading: true
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
					picture: data.image.url
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
					picture2: data.image.url
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
				<Card imgUrl={this.state.picture} />
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
				<Card imgUrl={this.state.picture2} />
			</div>
		);
	}
}

export default App;
