import {actionCreator} from './../../utils/reduxActions'

// action types
const SET_FILTER = `SET_FILTER`;

// actions
const setFilterAction = (payload) => actionCreator(SET_FILTER, payload);

export {SET_FILTER};
export {setFilterAction};