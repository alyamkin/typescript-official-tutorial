"use strict";
// function greeter(fn: (a: string) => void) {
//   fn('Hello, World');
// }
function greeter(fn) {
    fn('Hello, World');
}
function printToConsole(s) {
    console.log(s);
}
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(10));
}
function myFunc(someArgs) {
    return someArgs > 20;
}
myFunc.description = 'default description';
myFunc.description2 = 'default description2';
// doSomething(myFunc);
//Construct Signature
//Example 1
// type SomeConstructor = {
//   new (name: string): User;
// };
// function fn(user: SomeConstructor) {
//   return new user('Andrey');
// }
// console.log(fn(User));
//Example 2
// interface CallOrConstruct {
//   (n?: number): string;
//   new (s: string): Date;
// }
// function fn(ctor: CallOrConstruct) {
//   console.log(ctor(10));
//   console.log(new ctor('10'));
// }
// fn(Date);
//Example 3
// interface Person {
//   name: string;
//   age: number;
// }
// type PersonConstructor = {
//   new (name: string, age: number): Person;
// };
// class PersonImpl implements Person {
//   constructor(public name: string, public age: number) {}
// }
// function createPerson(
//   ctor: PersonConstructor,
//   name: string,
//   age: number
// ): Person {
//   return new ctor(name, age);
// }
// const person = createPerson(PersonImpl, 'Andrey', 38);
// console.log(person);
//Example 4 (Interface and Factory Pattern)
// interface Shape {
//   area(): number;
// }
// type ShapeConstructor = {
//   new (...params: number[]): Shape;
// };
// class Rectangle implements Shape {
//   constructor(public width: number, public height: number) {}
//   area() {
//     return this.width * this.height;
//   }
// }
// class Square implements Shape {
//   constructor(public width: number) {}
//   area() {
//     return this.width * this.width;
//   }
// }
// function createShape(ctor: ShapeConstructor, ...params: number[]) {
//   return new ctor(...params);
// }
// const rectangle = createShape(Rectangle, 10, 50);
// console.log(rectangle.area());
//Generic Functions
function firstElement(arr) {
    return arr[0];
}
// console.log(firstElement<number>([1, 2, 3]));
// console.log(firstElement([]));
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (arg) => parseInt(arg));
// console.log(parsed);
//Constraints
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
// const longerArray = longest([1, 2], [1, 2, 3]);
// const longerString = longest('alice', 'bob');
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: 'Andrey', age: 38 };
// console.log(getProperty(user, 'name'));
//Working with Constrained Values
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// }
// console.log(minimumLength('Andrey', 7));
//Specify Type Arguments
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// const combined = combine([1, 2, 3], [3, 2, 1]);
const combined = combine([1, 2, 3], ['4']);
// console.log(combined);
//Guidelines for Writing Good Generic Functions
///Push Type Parameters Down
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
// console.log(firstElement1([1, 2, 3]));
// console.log(firstElement2([1, 2, 3]));
///Use Fewer Type Parameters
function filter(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
const filtered = filter([1, 2, 3, 4, 5], (n) => n > 3);
// console.log(filtered);
///Type Parameters Should Appear Twice
function greet(s) {
    console.log('Hello, ' + s);
}
// greet('Andrey');
//Optional Parameters
function f(n) {
    if (n) {
        console.log(n.toFixed());
        console.log(n.toFixed(3));
    }
}
function f2(n = 10) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
// f2(1000);
// f2();
///Optional Parameters in Callbacks
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
// console.log(makeDate(123456));
// console.log(makeDate(1, 2, 3));
function makeDate2(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
function fn(x) {
    if (x !== undefined) {
        console.log(x);
    }
    else {
        console.log('No argument provided');
    }
}
function len(x) {
    return x.length;
}
function len2(x) {
    return x.length;
}
// console.log(len('Andrey'));
// console.log(len([1, 2, 3]));
// console.log(len2(Math.random() > 0.5 ? 'Andrey' : [1, 2, 3]));
//Declare this in a function
const user2 = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
//Other Types to Know About
///void
function noop() {
    return;
}
///object
function handleObject(obj) {
    console.log(obj);
}
// handleObject({ a: 1 });
// handleObject([1, 2, 3]);
///unknown
// let value: unknown;
// value = 'Andrey';
// if (typeof value === 'string') {
//   console.log(value.toUpperCase());
// }
///never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log('This will never stop.');
    }
}
function handleResult(result) {
    switch (result) {
        case 'success':
            console.log('Operation succeeded.');
            break;
        case 'failure':
            console.log('Operation failed.');
            break;
        default:
            const _exhaustiveCheck = result;
            throw new Error('Unhandled result: ${result}');
    }
}
///Function
//Rest Parameters and Arguments
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4);
//Parameter Destructuring
function sum({ a, b, c }) {
    console.log(a + b + c);
}
const f1 = () => {
    return true;
};
// console.log(f1());
