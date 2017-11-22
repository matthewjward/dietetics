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

                    if (action.details.age < 3)
                    {
                        newState.Schofield = (59.512 * action.details.currentWeight) - 30.4;
                    }    
                    else if (action.details.age < 10) {
                        newState.Schofield = (22.706 * action.details.currentWeight) + 504.3;
                    }
                    else if (action.details.age < 18) {
                        newState.Schofield = (17.686 * action.details.currentWeight) + 658.2;
                    }
                    else if (action.details.age < 30) {
                        newState.Schofield = (15.057 * action.details.currentWeight) + 692.2;
                    }
                    else if (action.details.age < 60) {
                        newState.Schofield = (11.472 * action.details.currentWeight) + 873.1;
                    }
                    else {
                        newState.Schofield = (11.711 * action.details.currentWeight) + 587.7;
                    }

                }
                else if(action.details.gender == 'f')
                {
                    newState.MSJ = (10 * action.details.currentWeight) + (6.25 * action.details.height*100) - (5 * action.details.age) - 161;
                    newState.HB = 447.593 + (9.247 * action.details.currentWeight) + (3.098 * action.details.height*100) - (4.33 * action.details.age);

                    if (action.details.age < 3)
                    {
                        newState.Schofield = (58.317 * action.details.currentWeight) - 31.1;
                    }    
                    else if (action.details.age < 10) {
                        newState.Schofield = (20.315 * action.details.currentWeight) + 485.9;
                    }
                    else if (action.details.age < 18) {
                        newState.Schofield = (13.384 * action.details.currentWeight) + 692.6;
                    }
                    else if (action.details.age < 30) {
                        newState.Schofield = (14.818 * action.details.currentWeight) + 486.6;
                    }
                    else if (action.details.age < 60) {
                        newState.Schofield = (8.126 * action.details.currentWeight) + 845.6;
                    }
                    else {
                        newState.Schofield = (9.082 * action.details.currentWeight) + 658.5;
                    }

                }
            }
            return newState;           
        }        
        default:
            return state;
    }
}