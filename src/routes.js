import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BMRPage from './components/bmr/BMRPage';
import BariatricPage from './components/bariatric/BariatricPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BariatricPage} />        
        <Route path="bmr" component={BMRPage} />
        {/* <Route path="about" component={AboutPage} /> */}
    </Route>
);