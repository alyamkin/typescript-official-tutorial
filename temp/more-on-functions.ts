//Function Type Expressions
type GreetFunction = (a: string) => void;

// function greeter(fn: (a: string) => void) {
//   fn('Hello, World');
// }

function greeter(fn: GreetFunction) {
  fn('Hello, World');
}

function printToConsole(s: string) {
  console.log(s);
}

// greeter(printToConsole);

//Call Signatures
type DescribableFunction = {
  description: string;
  (args: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(10));
}

function myFunc(someArgs: number) {
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
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// console.log(firstElement<number>([1, 2, 3]));
// console.log(firstElement([]));

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], (arg) => parseInt(arg));

// console.log(parsed);

//Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

// const longerArray = longest([1, 2], [1, 2, 3]);
// const longerString = longest('alice', 'bob');

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
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
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const combined = combine([1, 2, 3], [3, 2, 1]);
const combined = combine<string | number>([1, 2, 3], ['4']);
// console.log(combined);

//Guidelines for Writing Good Generic Functions
///Push Type Parameters Down
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// console.log(firstElement1([1, 2, 3]));
// console.log(firstElement2([1, 2, 3]));

///Use Fewer Type Parameters
function filter<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

const filtered = filter([1, 2, 3, 4, 5], (n) => n > 3);
// console.log(filtered);

///Type Parameters Should Appear Twice
function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s);
}

// greet('Andrey');

//Optional Parameters
function f(n?: number) {
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
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));

//Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// console.log(makeDate(123456));
// console.log(makeDate(1, 2, 3));

function makeDate2(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
// console.log(makeDate2(123456));
// console.log(makeDate2(1, 2, 3));

///Overload Signatures and the Implementation Signature
function fn(x: string): void;
function fn(): void;
function fn(x?: string): void {
  if (x !== undefined) {
    console.log(x);
  } else {
    console.log('No argument provided');
  }
}

// fn();

// function fn2(x: string): string;
// function fn2(x: number): boolean;
// function fn2(x: string | number) {
//   if (typeof x === 'string') {
//     return 'oops';
//   } else {
//     return true;
//   }
// }

///Writing Good Overloads
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

function len2(x: any[] | string) {
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
function handleObject(obj: object) {
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
function throwError(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {
    console.log('This will never stop.');
  }
}

type Result = 'success' | 'failure';

function handleResult(result: Result): void {
  switch (result) {
    case 'success':
      console.log('Operation succeeded.');
      break;
    case 'failure':
      console.log('Operation failed.');
      break;
    default:
      const _exhaustiveCheck: never = result;
      throw new Error('Unhandled result: ${result}');
  }
}

///Function

//Rest Parameters and Arguments
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4);

//Parameter Destructuring
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

// sum({ a: 10, b: 3, c: 9 });

//Assignability of Function
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

// console.log(f1());
