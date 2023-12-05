let x:number = 10;
let y: string = `hello`;
let a: boolean = true;
let u: undefined = undefined;
let n: null = null;

type StringOrNumber = string | number;

let maybeString:StringOrNumber = 10;
maybeString = `10`;

let arr_1: number[] = [10,20,30];
let arr_2: (string | number)[] = [10,`20`];
let arr_3: Array<StringOrNumber> = [10,`20`];

type RGBSchema = [number, number, number];

let color:RGBSchema = [255,255,255];

enum REST {
    SUCCESS = `success`,
    ERROR = `error`
}

let response = {status: `success`};

if(response.status === REST.ERROR) console.log(REST.ERROR)
else console.log(REST.SUCCESS)

enum REST_METHODS {
    GET,
    POST,
    PUT,
    DELETE
}

interface User{
    name: string;
    age?: number;
    animals: Array<string>,
    method: REST_METHODS[]
}

let user:User = {
    name: `User`,
    animals: [`cat`, `dog`],
    method: [REST_METHODS.GET, REST_METHODS.DELETE]
}

class Animal{
    public name: string;

    constructor(name: string = `default name`){
        this.name = name;
    }
}

class Cat extends Animal{
    getInfo(){
        return `Hello, my name is ${this.name}`;
    }
}

let Dog = new Animal(`Patron`);
let Lion = new Animal();

let Tom = new Cat();
Tom.name = `Tom`;

const sum = (a: number, b?: number): number => {
    if(b) return a+b;
    else return a;
}

sum(10);
sum(10, 20);

const print = (value: string): void => console.log(value);

const makeState = <T>(defaultValue: T) => {
    let state:T = defaultValue;

    const getState = () => state;

    const setState = (newState:T) => {
        state = newState;
    }

    return {getState, setState};
}

let myState = makeState(1);
myState.setState(2);
console.log(myState.getState());

// Partial – some of options
// Pick - only necessary options
// Omit - without options

interface Product{
    id: number,
    code: number,
    name: string,
    country: string
}

type PartialProduct = Partial<Product>
type PickProduct = Pick<Product, "id" | "code">
type OmitProduct = Omit<Product, "code" | "country">

let product_1: PartialProduct = {
    id: 1,
    country: "Ukraine"
}

let product_2:PickProduct = {
    id: 2,
    code: 123
}

let product_3:OmitProduct = {
    id: 2,
    name: `phone`
}

export {};