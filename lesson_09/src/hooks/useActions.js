import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

import {actions as todos} from './../store/todos/todos.slice'
import {thunks as user} from './../store/user/user.thunks'

const rootActions = {
    ...todos,
    ...user
}

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(rootActions, dispatch);
}

export default useActions;