import React, { Component } from 'react';
import CardLife from './component/CardLife/CardLife';
import CardStats from './component/CardStats/CardStats';
import CardStars from './component/CardStars/CardStars';

class App extends Component {
	render() {
		return (
			<div>
				<CardStars />
				<CardStats />
			</div>
		);
	}
}

export default App;
