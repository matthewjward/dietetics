import {combineReducers} from 'redux';
import bariatric from './bariatricReducer';
import energy from './energyReducer';

const rootReducer = combineReducers({
    bariatric,
    energy
});

export default rootReducer;