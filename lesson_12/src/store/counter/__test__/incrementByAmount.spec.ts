import { describe } from 'vitest';
import counterSliceReducer, {initialState, increment, incrementByAmount} from '../slice';

describe(`reducer incrementByAmount`, () => {
    it(`check if counter incrementByAmount`, () => {
        const incrementState = counterSliceReducer(initialState, increment());
        const incrementByAmountState = counterSliceReducer(incrementState, incrementByAmount(2));

        expect(initialState.value).toBe(0);
        expect(incrementState.value).toBe(1);
        expect(incrementByAmountState.value).toBe(3);
    })
})