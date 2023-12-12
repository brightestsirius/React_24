import { describe } from 'vitest';
import counterSliceReducer, {initialState} from '../slice';

describe(`initail state`, () => {
    it(`initial state check`, () => {
        const state = counterSliceReducer(undefined, {type: "unknown"});
        expect(state).toEqual(initialState)
    })
})