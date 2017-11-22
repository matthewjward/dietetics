
import * as types from './actionTypes';

export function updatePatientDetails(details) {    
    return { type: types.UPDATE_PATIENT_DETAILS, details};
}