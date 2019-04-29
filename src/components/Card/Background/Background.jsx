import React from 'react';
import './Background.css';

const Background = props => {
	return (
		<div className=''>
			<img
				className='background_img'
				onError={e => {
					e.target.onerror = null;
					e.target.src = 'https://image.shutterstock.com/image-vector/404-error-page-not-found-450w-603779531.jpg';
				}}
				src={props.image.url}
				alt='background'
				style={{}}
			/>
		</div>
	);
};

export default Background;
