import counterSliceReducer, {initialState} from './../slice';

describe(`initial state tests`, () => {
    it(`initial state`, () => {
        const state = counterSliceReducer(undefined, {type: "unknown"});
        expect(state).toEqual(initialState);
    })
})