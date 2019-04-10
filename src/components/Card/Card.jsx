import React, { Component } from 'react';
import Background from './Background/Background';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Background imgUrl={this.props.imgUrl} />
            </div>);
    }
}

export default Card;