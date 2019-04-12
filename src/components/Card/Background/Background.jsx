import React, { Component } from 'react';

class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<img src={this.props.imgUrl} alt='' />
			</div>
		);
	}
}

export default Background;
