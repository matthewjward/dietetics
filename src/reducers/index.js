import {combineReducers} from 'redux';
import courses from './courseReducer';
import bariatric from './bariatricReducer';

const rootReducer = combineReducers({
    courses,
    bariatric
});

export default rootReducer;