import {createAction} from '@reduxjs/toolkit'
import {put, call} from 'redux-saga/effects';
import {getUsersSuccess, getUsersRejected} from './usersSlice';
import postsAPI from './../../services/jsonplaceholder'

export function* getUsersSaga(): any {
    try {
        // const payload = yield postsAPI.get(`users`);
        const payload = yield call(postsAPI.get, `users`);
        yield put(getUsersSuccess(payload));
    } catch (err) {
        yield put(getUsersRejected(err));
    }
}

export const GET_USERS = "users/getUsers";
export const getUsers = createAction(GET_USERS); // {type: "users/getUsers", payload: {}}