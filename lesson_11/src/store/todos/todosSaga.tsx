import {createAction} from '@reduxjs/toolkit'
import {put, call} from 'redux-saga/effects';
import {getTodosSuccess, getTodosRejected} from './todosSlice';
import postsAPI from '../../services/jsonplaceholder'

export function* getTodosSaga(): any {
    try {
        const payload = yield call(postsAPI.get, `todos`);
        yield put(getTodosSuccess(payload));
    } catch (err) {
        yield put(getTodosRejected(err));
    }
}

export const GET_TODOS = "todos/getTodos";
export const getTodos = createAction(GET_TODOS);