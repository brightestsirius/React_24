import { DEFAULT_USER, TODOS } from './mockedData'
import {sum, getUserDate, awaitSetTimeout, fetchData} from './index'
import {test, expect, describe, afterEach, beforeEach} from 'vitest'

test(`fn should return sum of numbers`, () => {
    const result = sum(2,3);
    expect(result).toBe(5);
})

test(`fn should return a*100`, () => {
    const result = sum(2);
    expect(result).toBe(200);
    expect(result).not.toBe(2);
})

describe(`users fn`, () => {
    test(`fn should return default user`, () => {
        const result = getUserDate();
        expect(result).toEqual(DEFAULT_USER);
    })
    
    test(`fn should return user`, () => {
        const result = getUserDate({name: `Alina`});
        expect(result).toEqual({name: `Alina`, country: `Ukraine`});
    })
    
    let counter = 0;
    
    beforeEach(() => {
        console.log(`beforeEach`, counter);
        counter++;
    })
    
    afterEach(() => {
        console.log(`afterEach`, counter);
    })
})

test(`after setTimeout`, async () => {
    const result = await awaitSetTimeout();
    expect(result).toBe(`after 1s`);
})

test(`fn to get data`, async () => {
    const result = await fetchData();
    expect(result).toEqual(TODOS);
})