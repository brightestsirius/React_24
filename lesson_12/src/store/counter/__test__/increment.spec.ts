import counterSliceReducer, {initialState, increment} from './../slice';

describe(`initial state tests`, () => {
    it(`increment initial state`, () => {
        const incrementState = counterSliceReducer(initialState, increment());
        const incrementNextState = counterSliceReducer(incrementState, increment());

        expect(initialState.value).toBe(0);
        expect(incrementState.value).toBe(1);
        expect(incrementNextState.value).toBe(2);
    })
})