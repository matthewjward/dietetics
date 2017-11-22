
import * as types from './actionTypes';

export function updateEnergyFactors(energyFactors) {    
    return { type: types.UPDATE_ENERGY_FACTORS, energyFactors};
}