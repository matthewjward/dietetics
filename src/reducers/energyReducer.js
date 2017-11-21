import * as types from '../actions/actionTypes';

export default function bariatricReducer(state = {}, action) {
    switch(action.type)
    {                     
        case types.UPDATE_PATIENT_DETAILS: {        
            //debugger;               
            let newState = Object.assign({}, state);            
            if (action.details.currentWeight && action.details.height && action.details.age) 
            {
                if(action.details.gender == 'm')
                {
                    newState.MSJ = (10 * action.details.currentWeight) + (6.25 * action.details.height*100) - (5 * action.details.age) + 5;
                    newState.HB = 88.362 + (13.397 * action.details.currentWeight) + (4.799 * action.details.height*100) - (5.677 * action.details.age);
                }
                else if(action.details.gender == 'f')
                {
                    newState.MSJ = (10 * action.details.currentWeight) + (6.25 * action.details.height*100) - (5 * action.details.age) - 161;
                    newState.HB = 447.593 + (9.247 * action.details.currentWeight) + (3.098 * action.details.height*100) - (4.33 * action.details.age);
                }
            }
            return newState;           
        }        
        default:
            return state;
    }
}