import React, { Component } from 'react';
import Card from './components/Card/Card.jsx';
import { Button, CardImg, Col, Row, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Select from './Select.jpg';
class SelectHero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			heroStore: [],
			loadingHeroStore: true
		};
	}

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
		this.setState({ hero1: this.state.heroStore[e.target.id] });
	};

	resetHero = () => {
		this.setState({ hero1: null, search: '', heroStore: [] });
	};

	render() {
		return (
			<div>
				{/* <CardImg src={Select} alt='Select your hero' /> */}

				<NavLink to='/'>
					<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Landing page</Button>
				</NavLink>

				<form onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
					<Button style={{ border: '1px solid black', backgroundColor: '#162CA2' }} type='submit'>
						Submit
					</Button>
				</form>
				<Button style={{ backgroundColor: 'red', border: '1px solid black' }} onClick={this.resetHero}>
					Reset
				</Button>
				<div className='d-flex flex-center justify-content-center'>
					{this.state.hero1 ? (
						<Card {...this.state.hero1} />
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
				</div>
			</div>
		);
	}
}

export default SelectHero;
