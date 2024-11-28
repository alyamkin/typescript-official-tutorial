function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}

interface Person {
  name: string;
  age: number;
}

function greet2(person: Person) {
  return 'Hello ' + person.name;
}

type Person2 = {
  name: string;
  age: number;
};

function greet3(person: Person2) {
  return 'Hello ' + person.name;
}

//Property Modifiers
///Optioanl Properties
interface PaintOptions {
  xPos?: number;
  yPos?: number;
}

///readonly Properties
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'`);

  // obj.prop = 'hello';
}

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}`);
  home.resident.age++;
}

function evict(home: Home) {
  // home.resident = {
  //   name: 'Victor the Evictor',
  //   age: 42
  // }
}

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: 'Andrey',
  age: 38,
};

let readonlyPerson: ReadonlyPerson = writablePerson;

// console.log(readonlyPerson.age);
// writablePerson.age = 39;
// console.log(readonlyPerson.age);

///Index Signatures
interface StringDictionary {
  [key: string]: number;
}

const obj: StringDictionary = {
  apple: 10,
  banana: 20,
  cherry: 30,
};

interface StringArray {
  readonly [index: number]: string | number;
}

const myArray: StringArray = ['1', '2', 3];
// console.log(myArray);

//Excess Property Checks
interface Person {
  name: string;
  age: number;
  [key: string]: any;
}

const person: Person = {
  name: 'John',
  age: 30,
  // occupation: 'Developer'
};

const person2 = {
  name: 'John',
  age: 30,
  occupation: 'Developer',
} as Person;

const person3 = {
  name: 'John',
  age: 30,
  occupation: 'Developer',
};

const validPerson: Person = person3;

function logPerson(person: Person) {
  console.log(
    `Person name: ${person.name}, age: ${person.age}, occupation: ${person.occupation}`
  );
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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

//Extending Types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};

//Intersection Types
interface Colorful1 {
  color: string;
}

interface Circle1 {
  radius: number;
}

type Colorful1Circle1 = Colorful1 & Circle1;

function draw(circle: Colorful1Circle1) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// draw({ color: 'blue', radius: 33 });

//Interface Extension vs. Intersection
interface Completion1 {
  status: boolean;
}

interface Completion2 {
  status: number;
}

// interface CombinedStatus extends Completion1, Completion2 {}

type CombinedStatus = Completion1 & Completion2;

// Generic Object Types
interface Box {
  contents: unknown;
}

let x: Box = {
  contents: 'hello world',
};

// if (typeof x.contents === 'string') {
//   console.log(x.contents.toUpperCase());
// }

// console.log((x.contents as string).toUpperCase());

interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: NumberBox, newContents: number): void;
function setContents(box: StringBox, newContents: string): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

const box: NumberBox = {
  contents: 30,
};

// setContents(box, 50);

interface Box2<Type> {
  contents: Type;
}

let boxA: Box2<string> = { contents: 'hello' };
boxA.contents;

function setContents2<Type>(box: Box2<Type>, newContents: Type) {
  box.contents = newContents;
}

//The Array Type
let ages: Array<number> = [10, 22, 35];
let names: string[] = ['Andrey', 'Foma', 'Kirill'];

function sum(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const total = sum([1, 2, 3, 4]);

interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

function getFirstElement<T>(arr: Array<T>): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]);

//ReadonlyArray

let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// readonlyArray.push(4);

function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // values.push('hello!!');
}

const roArray: ReadonlyArray<string> = new Array('red', 'green', 'blue');

// doStuff(roArray);
let x1: readonly string[] = [];
let y1: string[] = [];

x1 = y1;
// y1 = x1;

//Tuple Types
type StringNumberPair = [string, number];

function doSomething2(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
  // const c = pair[2];
}

doSomething2(['hello', 33]);

function doSomething3(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;

  console.log(inputString);
  console.log(hash);
}
doSomething3(['hello', 33]);

interface StringNumberPair2 {
  length: 2;
  0: string;
  1: number;

  slice(start?: number, end?: number): Array<string | number>;
}

let pair2: StringNumberPair2 = ['hello', 33];
let pairSliced = pair2.slice();
// console.log(pairSliced);

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;

  console.log(`Provided coordinates had ${coord.length} dimensions`);
}

setCoordinate([1, 2]);

//rest with tuples

type StringNumberBooleans = [string, number, ...boolean[]];
type StingBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ['hello', 1];
const b: StringNumberBooleans = ['hello', 1, false];
const c: StringNumberBooleans = ['hello', 1, true, false, true, false];

function readButtonInput(args: StringNumberBooleans) {
  const [s, n, ...b] = args;

  console.log(s);
  console.log(n);
  console.log(b);
}

readButtonInput(c);

//readonly Tuple Types
function doSomething4(pair: readonly [string, number]) {
  // pair[0] = 'hello!';
}

doSomething4(['Andrey', 33]);

let point = [3, 4] as const;

function distanceFromOrigin([x, y]: readonly [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

const distance = distanceFromOrigin(point);
