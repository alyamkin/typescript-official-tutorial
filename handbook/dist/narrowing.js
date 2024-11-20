"use strict";
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }
    return padding + input;
}
// console.log(padLeft(5, 'Andrey'));
// console.log(padLeft('     ', 'Andrey'));
//Typeof type guards
function printAll(strs) {
    if (strs && typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs == 'string') {
        console.log(strs);
    }
    else {
    }
}
//Truthiness narrowing
function getUsersOnlineMessages(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's Headers. :(";
}
// console.log(getUsersOnlineMessages(0));
//Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toLowerCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function printAll2(strs) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        return container.value * factor;
    }
    return container.value;
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim;
    }
    return animal.fly;
}
//instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//Assignments
let x1 = Math.random() < 0.5 ? 10 : 'Hello world';
x1 = 1;
// console.log(x1);
x1 = 'goodbye!';
// console.log(x1);
//Control flow analysis
function example2() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
//Using type predicates
function isFish(pet) {
    return pet.swim !== undefined;
}
function handleShape(shape) {
    if (shape.kind === 'circle') {
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
//Exhaustiveness checking
function getArea2(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
const circle = {
    kind: 'circle',
    radius: 5,
};
const square = {
    kind: 'square',
    sideLength: 5,
};
const triangle = {
    kind: 'triangle',
    sideLength: 10,
};
console.log(getArea2(circle));
console.log(getArea2(square));
console.log(getArea2(triangle));
