import counterSliceReducer, {increment, initialState} from '../slice';
import {describe} from 'vitest'

describe(`increment`, () => {
    it(`default increment`, () => {
        const incrementState = counterSliceReducer(initialState, increment());
        const incrementNextState = counterSliceReducer(incrementState, increment());

        expect(initialState.value).toEqual(0);
        expect(incrementState.value).toEqual(1);
        expect(incrementNextState.value).toEqual(2);
    })
})