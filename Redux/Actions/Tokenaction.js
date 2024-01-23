import * as actionType from '../Actions/actionType';

export const Settoken = (token) =>({
    type: actionType.SET_TOKEN,
    payload : token
})