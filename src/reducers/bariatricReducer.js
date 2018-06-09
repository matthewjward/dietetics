import * as types from '../actions/actionTypes';

export default function bariatricReducer(state = {}, action) {
    switch(action.type)
    {
        case types.UPDATE_BARIATRICS: {
            //debugger;
            let newState = Object.assign({}, state);
            newState.proteinMultiplier = action.bariatrics.proteinMultiplier;
            if(newState.protein)
                newState.protein = newState.proteinMultiplier * newState.IBW;

            return newState;
        }
        case types.UPDATE_PATIENT_DETAILS: {
            //debugger;
            let newState = Object.assign({}, state);
            if(action.details.height)
            {
                newState.IBW = 25 * (action.details.height * action.details.height);
                newState.protein = newState.proteinMultiplier * newState.IBW;

                if (action.details.startWeight)
                {
                    newState.startBMI = action.details.startWeight / (action.details.height * action.details.height);
                    newState.EWL = (action.details.startWeight - newState.IBW) * 0.66;
                    newState.goalWeight = (action.details.startWeight - newState.EWL);
                }
                if (action.details.currentWeight)
                {
                    newState.currentBMI = action.details.currentWeight / (action.details.height * action.details.height);
                }
            }

            if (action.details.startWeight && action.details.currentWeight)
            {
                newState.weightLoss = (action.details.startWeight - action.details.currentWeight);
                newState.percentWeightLoss = 100 * (newState.weightLoss / action.details.startWeight);
            }

            return newState;
        }
        default:
            return state;
    }
}
