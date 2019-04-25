import React, { Component } from 'react';
import Card from './components/Card/Card.jsx';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
				<form onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleChange} value={this.state.search} name='search' id='search' />
					<button type='submit'>Submit</button>
				</form>
				<button onClick={this.resetHero}>Reset</button>
				<NavLink to='/'>
					<Button style={{ backgroundColor: '#162CA2', border: '1px solid black' }}>Back to landing page</Button>
				</NavLink>
				{this.state.hero1 ? (
					<Card {...this.state.hero1} />
				) : (
					<div className='d-flex flex-wrap m-5'>
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
		);
	}
}

export default SelectHero;
