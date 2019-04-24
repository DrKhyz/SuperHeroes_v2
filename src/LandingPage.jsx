import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <NavLink to='/arena'><button>click here to enter in the arena</button></NavLink>
            <NavLink to='/selecthero'><button>click here to select your hero</button></NavLink>
        </div>
    );
}

export default LandingPage;