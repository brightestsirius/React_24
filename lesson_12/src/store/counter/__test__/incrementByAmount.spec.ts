import counterSliceReducer, {initialState, increment, incrementByAmount} from '../slice';
import {describe} from 'vitest'

describe(`increment`, () => {
    it(`default incrementByAmountState`, () => {
        const incrementByAmountState = counterSliceReducer(initialState, incrementByAmount(2));

        expect(initialState.value).toEqual(0);
        expect(incrementByAmountState.value).toEqual(2);
    })

    it(`incrementByAmountState after increment`, () => {
        const incrementByAmountState = counterSliceReducer(initialState, incrementByAmount(2));
        const incrementState = counterSliceReducer(incrementByAmountState, increment());

        expect(initialState.value).toEqual(0);
        expect(incrementByAmountState.value).toEqual(2);
        expect(incrementState.value).toEqual(3);
    })
})