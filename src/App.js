import React, { Component } from 'react';

import Card from './components/Card/Card';
import CardLife from './components/CardLife/CardLife';
import ButtonRandomHero from './components/Buttons/ButtonRandomHero';
import ButtonFight from './components/Buttons/ButtonFight';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			picture: ''
		};
	}

	getCaracter1() {
		// const getRandomInt = max => { return Math.floor(Math.random() * Math.floor(max)) }
		fetch(`https://www.superheroapi.com/api.php/1241580159334538/644`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					picture: data.image.url
				});
			});
	}

	getCaracter2() {
		// const getRandomInt2 = max => { return Math.floor(Math.random() * Math.floor(max)) }
		fetch(`https://superheroapi.com/api.php/2427014800851400/202`)
			.then(response => response.json())
			.then(data => {
				this.setState({ picture2: data.image.url });
			});
	}

	render() {
		return (
			<div className='cardDisplay'>
				<Card imgUrl={this.state.picture} />
				<div className='buttonDisplay'>
					<ButtonFight />
					<ButtonRandomHero>
						{this.getCaracter1()}
						{this.getCaracter2()}
					</ButtonRandomHero>
					<CardLife />
				</div>
				<Card imgUrl={this.state.picture2} />
			</div>
		);
	}
}

export default App;
