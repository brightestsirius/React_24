// action types
const ITEM_CHANGE = `ITEM_CHANGE`;
const SET_LIST = `SET_LIST`;

// actionCreator
const actionCreator = (type, payload) => {
    let action = {type};
    if(payload) action.payload = payload;
    return action;
}

// actions
const itemChangeAction = payload => actionCreator(ITEM_CHANGE, payload);
const setListAction = payload => actionCreator(SET_LIST, payload);

export {ITEM_CHANGE, SET_LIST};
export {itemChangeAction, setListAction};