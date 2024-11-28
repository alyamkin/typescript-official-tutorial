"use strict";
function greet(person) {
    return 'Hello ' + person.name;
}
function greet2(person) {
    return 'Hello ' + person.name;
}
function greet3(person) {
    return 'Hello ' + person.name;
}
function doSomething(obj) {
    console.log(`prop has the value '${obj.prop}'`);
    // obj.prop = 'hello';
}
function visitForBirthday(home) {
    console.log(`Happy birthday ${home.resident.name}`);
    home.resident.age++;
}
function evict(home) {
    // home.resident = {
    //   name: 'Victor the Evictor',
    //   age: 42
    // }
}
let writablePerson = {
    name: 'Andrey',
    age: 38,
};
let readonlyPerson = writablePerson;
const obj = {
    apple: 10,
    banana: 20,
    cherry: 30,
};
const myArray = ['1', '2', 3];
const person = {
    name: 'John',
    age: 30,
    // occupation: 'Developer'
};
const person2 = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
};
const person3 = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
};
const validPerson = person3;
function logPerson(person) {
    console.log(`Person name: ${person.name}, age: ${person.age}, occupation: ${person.occupation}`);
}
function createSquare(config) {
    return {
        color: config.color || 'red',
        area: config.width ? config.width * config.width : 20,
    };
}
const squareOptions = { colour: 'green', width: 200 };
// let mySquare = createSquare({ colour: 'green', width: 30 } as SquareConfig);
// let mySquare = createSquare({ colour: 'green', width: 30 });
let mySquare = createSquare(squareOptions);
console.log(mySquare);
const cc = {
    color: 'red',
    radius: 42,
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
let x = {
    contents: 'hello world',
};
function setContents(box, newContents) {
    box.contents = newContents;
}
const box = {
    contents: 30,
};
let boxA = { contents: 'hello' };
boxA.contents;
function setContents2(box, newContents) {
    box.contents = newContents;
}
//The Array Type
let ages = [10, 22, 35];
let names = ['Andrey', 'Foma', 'Kirill'];
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
const total = sum([1, 2, 3, 4]);
let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
];
function getFirstElement(arr) {
    return arr[0];
}
const firstNumber = getFirstElement([1, 2, 3]);
//ReadonlyArray
let readonlyArray = [1, 2, 3];
// readonlyArray.push(4);
function doStuff(values) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // values.push('hello!!');
}
const roArray = new Array('red', 'green', 'blue');
// doStuff(roArray);
let x1 = [];
let y1 = [];
x1 = y1;
function doSomething2(pair) {
    const a = pair[0];
    const b = pair[1];
    // const c = pair[2];
}
doSomething2(['hello', 33]);
function doSomething3(stringHash) {
    const [inputString, hash] = stringHash;
    console.log(inputString);
    console.log(hash);
}
doSomething3(['hello', 33]);
let pair2 = ['hello', 33];
let pairSliced = pair2.slice();
function setCoordinate(coord) {
    const [x, y, z] = coord;
    console.log(`Provided coordinates had ${coord.length} dimensions`);
}
setCoordinate([1, 2]);
const a = ['hello', 1];
const b = ['hello', 1, false];
const c = ['hello', 1, true, false, true, false];
function readButtonInput(args) {
    const [s, n, ...b] = args;
    console.log(s);
    console.log(n);
    console.log(b);
}
readButtonInput(c);
//readonly Tuple Types
function doSomething4(pair) {
    // pair[0] = 'hello!';
}
doSomething4(['Andrey', 33]);
let point = [3, 4];
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
const distance = distanceFromOrigin(point);
