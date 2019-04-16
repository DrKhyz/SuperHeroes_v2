import React, { Component } from 'react';
import './Background.css';

const Background = props => {
	return <img className='background_img' src={props.image.url} alt='' />;
};

export default Background;
