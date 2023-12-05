// types
let x: number = 10;
let y: string = `hello`;
let b: boolean = true;
let u: undefined = undefined;
let n: null = null;

// any
// unknown
// let response:unknown = `10`;
// response.toUpperCase();

type StringOrNumber = number | string;

let arr_1: number[] = [10, 20, 30];
let arr_2: (number | string)[] = [10, `20`, 30];
let arr_3: StringOrNumber[] = [10, `20`, 30];
let arr_4: Array<StringOrNumber> = [10, `20`, 30];

let id: StringOrNumber = 10;
id = `20`;

// tuple
type RGB = [number, number, number];
let color: RGB = [255, 230, 120];

// enum
enum RESPONSE {
    SUCCESS = `success`,
    ERROR = `error`
}

let response = { status: `success` };

if (response.status === RESPONSE.SUCCESS) console.log(`Success!`);
else if (response.status === RESPONSE.ERROR) console.log(`Error!`);

// interface
enum REST_METHODS {
    GET,
    POST,
    PUT,
    DELETE
}

interface User {
    name: string;
    age?: number;
    animals: Array<string>
    methods: Array<REST_METHODS>
}

// extends
interface Admin extends User {
    access: boolean;
}

let user: Admin = {
    name: `User name`,
    animals: [`cat`],
    methods: [REST_METHODS.GET, REST_METHODS.DELETE],
    access: true
}

// class
class Animal{
    public name: string;

    constructor(name: string = `default name`){
        this.name = name;
    }
}

class Lion extends Animal{
    getInfo(){
        return `Hello, I'm ${this.name}.`;
    }
}

let Cat = new Animal();
let Dog = new Animal(`Patron`);
let Simba = new Lion(`Simba`);

Simba.name = `Mufasa`;

console.log(Cat);
console.log(Dog);

// func
const print = (value: string):void => console.log(value);

const sum = (a:number, b?:number):number => {
    if(!b) return a;
    else return a+b;
}

sum(10, 20);
sum(10);

// generic
const makeState = <T>(defaultState: T) => {
    let state:T = defaultState;

    const getState = () => state;

    const setState = (newState: T) => {
        state = newState;
    }

    return {getState, setState};
}

let myState = makeState(`1`);
myState.setState(`2`);
console.log(myState.getState());

// Partial – some of options
// Pick - only necessary options
// Omit - without options

interface Student{
    id: number;
    name: string;
    country: string;
    isMarried: boolean;
}

type PartialStudent = Partial<Student>;
type PickStudent = Pick<Student, "id" | "name">
type OmitStudent = Omit<Student, "isMarried" | "country">

let student_1:PartialStudent = {
    id: 1,
    country: `Ukraine`
}

let student_2: PickStudent = {
    id: 1,
    name: `Student 2`
}

let student_3: OmitStudent = {
    id: 1,
    name: `Student 3`
}

export {}