import {actionCreator} from './../../utils/reduxActions'

// action types
const LIST_ITEM_CHANGE = `LIST_ITEM_CHANGE`;
const SET_LIST = `SET_LIST`;

// actions
const listItemChangeAction = (payload) => actionCreator(LIST_ITEM_CHANGE, payload);
const setListAction = payload => actionCreator(SET_LIST, payload);

export {LIST_ITEM_CHANGE, SET_LIST};
export {listItemChangeAction, setListAction};