import { describe } from 'vitest';
import counterSliceReducer, {initialState, increment} from '../slice';

describe(`reducer increment`, () => {
    it(`check if counter increment`, () => {
        const incrementState = counterSliceReducer(initialState, increment());

        expect(initialState.value).toBe(0);
        expect(incrementState.value).toBe(1);
    })
})