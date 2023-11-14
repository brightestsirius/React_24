import service from './../../services/jsonplaceholder'

import {setListAction, itemChangeAction} from './actions'

const setListThunk = (payload) => {
    return async (dispatch) => {
        let list = await service.get(payload);
        dispatch(setListAction(list.slice(0,10)));
    }
}

const changeListItemThunk = (payload) => {
    return async (dispatch) => {
        let item = await service.patch(`todos`, payload.id, payload);
        dispatch(itemChangeAction(item));
    }
}

export {setListThunk, changeListItemThunk};