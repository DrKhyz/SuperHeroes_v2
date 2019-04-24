import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import App from './App';
import SelectHero from './SelectHero';

const RouterFile = () => {
    return (
        <Router>
            <Route exact path='/' component={LandingPage} />
            <Route path='/arena' component={App} />
            <Route path='/selecthero' component={SelectHero} />
        </Router>
    );
}

export default RouterFile;