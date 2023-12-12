import counterSliceReducer, {initialState, incrementByAmount, increment} from './../slice';

describe(`initial state tests`, () => {
    it(`increment initial state`, () => {
        const incrementByAmountState = counterSliceReducer(initialState, incrementByAmount(2));
        const incrementState = counterSliceReducer(incrementByAmountState, increment());

        expect(initialState.value).toBe(0);
        expect(incrementByAmountState.value).toBe(2);
        expect(incrementState.value).toBe(3);
    })
})