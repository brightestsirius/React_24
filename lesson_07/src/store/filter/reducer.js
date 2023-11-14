import {LIST_FILTER_ALL} from './../../constants/list'
import {SET_FILTER} from './actions'

const initialState = {
    filter: LIST_FILTER_ALL
}

const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case SET_FILTER:
            return {...state, filter: payload}
        default:
            return state;
    }
}

export default reducer;