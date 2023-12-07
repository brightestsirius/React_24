function* example(){
    let sum = 10+20;
    yield sum;

    let pow = Math.pow(sum, 2);
    yield pow;

    let diff = pow/3;
    return diff;
}

const myGen = example();

console.log(myGen.next()); // {value: 30; done: false}
console.log(`after first next`);

console.log(myGen.next().value); // {value: 30**2; done: false}
console.log(`after second next`);

console.log(myGen.next()); // {value: (30**2) / 3; done: true}

console.log(myGen.next()); // {value: undefined; done: true}