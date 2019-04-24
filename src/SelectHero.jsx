import React, { Component } from 'react'
import Card from './components/Card/Card.jsx'

class SelectHero extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			heroStore: [],
			loadingHeroStore: true,
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = e => {
		this.setState({ search: e.target.value })
	}

	handleSubmit = e => {
		this.setState({ loadingHeroStore: true })
		fetch(`https://superheroapi.com/api.php/2427014800851400/search/${this.state.search}`)
			.then(response => response.json())
			.then(data => this.setState({ heroStore: data.results }))
			.then(this.setState({ loadingHeroStore: false }))
		e.preventDefault()
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						onChange={this.handleChange}
						value={this.state.search}
						name='search'
						id='search'
					/>
					<button type='submit'>Submit</button>
				</form>
				<div className='d-flex flex-wrap flex-start m-5'>
					{this.state.loadingHeroStore
						? ''
						: this.state.heroStore.map(heroProps => <Card {...heroProps} />)}
				</div>
			</div>
		)
	}
}

export default SelectHero
