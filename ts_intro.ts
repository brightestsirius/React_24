let valueNumber:number = 10;
let valueString:string = `str`;
let valueBoolean:boolean = true;
let valueUndefined:undefined = undefined;
let valueNull:null = null;

let arr_1: number[] = [10, 20, 30];
let arr_2: (string | number)[] = [10, 'str'];

type StringOrNumber = string | number;

let arr_3: StringOrNumber[] = [10, 'str'];
let arr_4: Array<StringOrNumber> = [10, 'str'];

interface IUser{
    name: string;
    age?: number;
    animals: Array<string>
}

let user:IUser = {
    name: `User`,
    animals: [`cat`, `dog`]
}

type RGBcolor = [number, number, number];

let color: RGBcolor = [255, 255, 255];

class Animal {
    name: string = `default name`;

    constructor(name: string = `default name`){
        this.name = name;
    }
}

class Tiger extends Animal{
    type: string;

    constructor(){
        super();
        this.type = `tiger`;
    }
}

let lion = new Animal(`Simba`);
let tiger = new Tiger();

console.log(lion, tiger);

enum RESPONSE_TYPES {
    SUCCESS = `success`,
    ERROR = `error`
}

let response = {status: `success`};

if(response.status === RESPONSE_TYPES.SUCCESS) console.log(RESPONSE_TYPES.SUCCESS)
else console.log(RESPONSE_TYPES.ERROR);

const summ = (a:number, b?:number):number => {
    if(b) return a+b;
    else return a;
}

summ(10, 20);
summ(10);

const print = (value: string): void => console.log(value);

const makeState = <T>(defaultState: T) => {
    let state:T = defaultState;

    const getState = () => state;

    const setState = (newState:T) => {
        state = newState;
    }

    return {getState, setState};
}

let myState = makeState(1);

myState.setState(1);
console.log(myState.getState());

myState.setState(2);
console.log(myState.getState());

export {}