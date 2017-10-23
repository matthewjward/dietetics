import * as types from '../actions/actionTypes';

export default function bariatricReducer(state = {}, action) {
    switch(action.type)
    {        
        case types.UPDATE_BARIATRICS: {           
            //let newState = Object.assign({}, state);
            let newState = {};
            if(action.bariatrics.height)
            {                
                newState.IBW = 22.5 * (action.bariatrics.height * action.bariatrics.height);
                newState.protein = action.bariatrics.proteinMultiplier * newState.IBW;

                if (action.bariatrics.startWeight)
                {                             
                    newState.startBMI = action.bariatrics.startWeight / (action.bariatrics.height * action.bariatrics.height);                
                    newState.EWL = (action.bariatrics.startWeight - newState.IBW) * 0.66;
                    newState.goalWeight = (action.bariatrics.startWeight - newState.EWL);                                    
                }
                if (action.bariatrics.currentWeight)
                {
                    newState.currentBMI = action.bariatrics.currentWeight / (action.bariatrics.height * action.bariatrics.height);            
                }
            }
            
            if (action.bariatrics.startWeight && action.bariatrics.currentWeight) 
            {
                newState.weightLoss = (action.bariatrics.startWeight - action.bariatrics.currentWeight);
                newState.percentWeightLoss = 100 * (newState.weightLoss / action.bariatrics.startWeight);                                        
            }

            return newState;           
        }                 
        default:
            return state;
    }
}