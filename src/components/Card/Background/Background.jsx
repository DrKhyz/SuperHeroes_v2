import React from 'react';

const Background = props => {
	return (
		<div className=''>
			<img
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
