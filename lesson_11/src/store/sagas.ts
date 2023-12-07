import {takeLatest, takeEvery} from 'redux-saga/effects';
import {GET_USERS, getUsersSaga} from './users/usersSaga'
import {GET_TODOS, getTodosSaga} from './todos/todosSaga'

export function* sagas(){
    yield takeLatest(GET_USERS, getUsersSaga);
    yield takeEvery(GET_TODOS, getTodosSaga);
}