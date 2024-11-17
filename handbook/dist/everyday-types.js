"use strict";
//The primitives: string, number, and boolean
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Arrays
const numArray = [1, 2, 3];
//any
let obj = { x: 0 };
obj.bar = 100;
obj = 'hello';
const n = obj;
//Type Annotations on Variables
let myName = 'Alice';
//Functions
// function greet2(name: string) {
//   console.log('Hello, ' + name.toLocaleUpperCase() + '!!');
// }
function getFavoriteNumber() {
    return 26;
}
function getFavoriteNumberAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return 26;
    });
}
const names = ['Alice', 'Bob', 'Eve'];
// const numbers = [1, 2, 3];
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// numbers.forEach((s) => {
//   console.log(s);
// });
//Object Types
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
// printCoord({ x: 3, y: 7 });
//Optional Properties
function printName(obj) {
    console.log(`Hello ${obj.first} ${obj.last}`);
    console.log(obj.last);
}
// printName({ first: 'Andrey' });
// printName({ first: 'Andrey', last: 'Lyamkin' });
//Union Types
//Defining a Union Type
function printId(id) {
    // console.log(`Your ID is: ${id}`);
    // console.log(id.toUpperCase());
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// printId(101);
// printId('202');
// printId({ nyID: 22342 });
//Working with Union Types
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log(`Hello, ${x.join(' and ')}`);
    }
    else {
        console.log(`Welcome lone traveler ${x}`);
    }
}
// welcomePeople(['Andrey', 'Yana']);
// welcomePeople('Andrey');
function getFirstThree(x) {
    return x.slice(0, 3);
}
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
// printCoord3({ x: 100, y: 100 });
//Type Assertions
let someValue = 'Hello, world';
let strLength = someValue.length;
//Literal Types
let changingString = 'Hello World!';
changingString = 'Hi';
const constantString = 'Hello World!';
let x = 'hello';
// x = 'howdy';
function printText(s, alignment) { }
function configure(x) { }
configure({ width: 100 });
configure(true);
//Literal Inference
function handleRequest(url, method) { }
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
//null and undefined
function doSomething(x) {
    if (x !== null) {
        console.log('Hello, ' + x.toUpperCase());
    }
}
function liveDangerous(x) {
    console.log(x.toFixed());
}
liveDangerous();
