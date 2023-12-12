import {DEFAULT_USER} from './mockedData'

interface User{
    name: string;
    age?: number;
    country?: string;
}

const sum = (a: number, b?: number): number => {
    if(b) return a + b;
    return a*100;
}

const getUserData = (user?: User) => {
    if(user) {
        user.country = `Ukraine`;
        return user;
    }
    return DEFAULT_USER;
}

const afterSetTimeout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after 1 sec`);
        }, 1000)
    })
}

const fetchData = async () => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
        response = await request.json();

    return response.slice(0,2);
}

export { sum, getUserData, afterSetTimeout, fetchData }