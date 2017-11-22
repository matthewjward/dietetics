import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EnergyPage from './components/energy/EnergyPage';
import BariatricPage from './components/bariatric/BariatricPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BariatricPage} />        
        <Route path="energy" component={EnergyPage} />        
    </Route>
);