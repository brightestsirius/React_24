import counterSliceReducer, {initialState} from '../slice';
import {describe} from 'vitest'

describe(`initial state`, () => {
    it(`initial state`, () => {
        const state = counterSliceReducer(undefined, {type: "unknown"});
        expect(state).toEqual(initialState);
    })
})