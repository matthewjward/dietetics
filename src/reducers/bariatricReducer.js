import * as types from '../actions/actionTypes';

export default function bariatricReducer(state = {}, action) {
    switch(action.type)
    {        
        case types.UPDATE_BARIATRICS: {           


            if (action.bariatrics.startWeight && action.bariatrics.currentWeight && action.bariatrics.height)
            {
                /*
                let newState = Object.assign({}, state, {
                    startBMI: action.bariatrics.startWeight / (action.bariatrics.height * action.bariatrics.height),
                    currentBMI: action.bariatrics.currentWeight / (action.bariatrics.height * action.bariatrics.height),
                    IBW: 22.5 * (action.bariatrics.height * action.bariatrics.height),
                    EWL: (action.bariatrics.startWeight - this.IBW) * 0.66
                });
                */
                //debugger;                                    
                let newState = Object.assign({}, state);
                newState.startBMI = action.bariatrics.startWeight / (action.bariatrics.height * action.bariatrics.height);
                newState.currentBMI = action.bariatrics.currentWeight / (action.bariatrics.height * action.bariatrics.height);            
                newState.IBW = 22.5 * (action.bariatrics.height * action.bariatrics.height);
                newState.EWL = (action.bariatrics.startWeight - newState.IBW) * 0.66;
                newState.goalWeight = (action.bariatrics.startWeight - newState.EWL);
                newState.weightLoss = (action.bariatrics.startWeight - action.bariatrics.currentWeight);
                newState.percentWeightLoss = 100 * (newState.weightLoss / action.bariatrics.startWeight);
                newState.protein = 1.5 * newState.IBW;
            
            /*
            let newState = Object.assign({}, action);
            newState.bariatrics.startBMI = newState.bariatrics.startWeight / (newState.bariatrics.height * newState.bariatrics.height);
            newState.bariatrics.currentBMI = newState.bariatrics.currentWeight / (newState.bariatrics.height * newState.bariatrics.height);
            newState.bariatrics.IBW = 22.5 * (newState.bariatrics.height * newState.bariatrics.height);
            newState.bariatrics.EWL = (newState.bariatrics.startWeight - newState.bariatrics.IBW) * 0.66;
            newState.bariatrics.goalWeight = (newState.bariatrics.startWeight - newState.bariatrics.EWL);
            newState.bariatrics.weightLoss = (newState.bariatrics.startWeight - newState.bariatrics.currentWeight);
            newState.bariatrics.percentWeightLoss = newState.bariatrics.weightLoss / (newState.bariatrics.startWeight * 100);
            newState.bariatrics.protein = 1.5 * newState.bariatrics.IBW;
            */
                return newState;           
            }
            else return state;
        }                 
        default:
            return state;
    }
}