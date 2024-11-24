//The primitives: string, number, and boolean

//Arrays
const numArray: number[] = [1, 2, 3];

//any
let obj: any = { x: 0 };
obj.bar = 100;
obj = 'hello';
const n: number = obj;

//Type Annotations on Variables
let myName: string = 'Alice';

//Functions
// function greet2(name: string) {
//   console.log('Hello, ' + name.toLocaleUpperCase() + '!!');
// }

function getFavoriteNumber(): number {
  return 26;
}

async function getFavoriteNumberAsync(): Promise<number> {
  return 26;
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
function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}
// printCoord({ x: 3, y: 7 });

//Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log(`Hello ${obj.first} ${obj.last}`);
  console.log(obj.last);
}
// printName({ first: 'Andrey' });
// printName({ first: 'Andrey', last: 'Lyamkin' });

//Union Types

//Defining a Union Type
function printId(id: number | string) {
  // console.log(`Your ID is: ${id}`);
  // console.log(id.toUpperCase());

  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
// printId(101);
// printId('202');
// printId({ nyID: 22342 });

//Working with Union Types
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`Hello, ${x.join(' and ')}`);
  } else {
    console.log(`Welcome lone traveler ${x}`);
  }
}
// welcomePeople(['Andrey', 'Yana']);
// welcomePeople('Andrey');

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
// console.log(getFirstThree([1, 2, 3, 4, 5]));
// console.log(getFirstThree('Andrey'));

//Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord2({ x: 100, y: 100 });

//Interfaces
interface Point2 {
  x: number;
  y: number;
}

function printCoord3(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord3({ x: 100, y: 100 });

//Type Assertions
let someValue: unknown = 'Hello, world';
let strLength: number = (<string>someValue).length;

//Literal Types
let changingString = 'Hello World!';
changingString = 'Hi';

const constantString = 'Hello World!';

let x: 'hello' = 'hello';
// x = 'howdy';

function printText(s: string, alignment: 'left' | 'right' | 'center') {}
// printText('Hello world', 'centr');

interface Options {
  width: number;
}
function configure(x: Options | boolean) {}
configure({ width: 100 });
configure(true);

//Literal Inference
function handleRequest(url: string, method: 'GET' | 'POST'): void {}
const req = { url: 'https://example.com', method: 'GET' } as const;
handleRequest(req.url, req.method);

//null and undefined
function doSomething(x: string | null) {
  if (x !== null) {
    console.log('Hello, ' + x.toUpperCase());
  }
}

function liveDangerous(x?: number | null) {
  console.log(x!.toFixed());
}

liveDangerous();
