import {DEFAULT_USER, DEFAULT_TODOS} from './mockedData'
import {sum, getUserData, afterSetTimeout, fetchData} from './index'
import {test, expect, beforeEach, afterAll, describe} from 'vitest'

test(`fn should return sum of numbers`, () => {
    const result = sum(2,3);
    expect(result).toBe(5);
});

test(`fn should return a*100`, () => {
    const result = sum(2);
    expect(result).not.toBe(2);
    expect(result).toBe(200);
});

describe(`user fns`, () => {
    it(`fn to get default user`, () => {
        const result = getUserData();
        expect(result).toEqual(DEFAULT_USER);
    })
    
    it(`fn to get user`, () => {
        const result = getUserData({name: `Anna`});
        expect(result).toEqual({name: `Anna`, country: `Ukraine`});
    })
    
    let counter = 0;
    
    beforeEach(() => {
        console.log(`beforeEach`);
        counter++;
    })
    
    afterAll(() => {
        console.log(`afterAll`, counter);
    })
})

test(`after setTimeout`, async () => {
    const result = await afterSetTimeout();
    expect(result).toBe(`after 1 sec`);
})

test(`fetching data`, async () => {
    const result = await fetchData();
    expect(result).toEqual(DEFAULT_TODOS);
})