import service from './../../services/list'

import {setListAction, listItemChangeAction} from './actions'

const getListThunk = (path) => {
    return async (dispatch, getState) => {
        let response = await service.get(path);
        dispatch(setListAction(response.slice(0,10)));
    }
}

const changeListItemCompletedThunk = (path, item) => {
    return async (dispatch) => {
        let response = await service.patch(path, item.id, {completed:! item.completed});
        dispatch(listItemChangeAction(response));
    }
}

export {getListThunk, changeListItemCompletedThunk};