function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

// console.log(padLeft(5, 'Andrey'));
// console.log(padLeft('     ', 'Andrey'));

//Typeof type guards
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs == 'string') {
    console.log(strs);
  } else {
  }
}

//Truthiness narrowing
function getUsersOnlineMessages(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's Headers. :(";
}
// console.log(getUsersOnlineMessages(0));

//Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

function printAll2(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    return container.value * factor;
  }
  return container.value;
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    return animal.swim;
  }
  return animal.fly;
}

//instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
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
  let x: string | number | boolean;

  x = Math.random() < 0.5;
  console.log(x);

  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}

//Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//Discriminated unions
// interface Shape {
//   kind: 'circle' | 'square';
//   radius?: number;
//   sideLength?: number;
// }

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Circle | Square;

function handleShape(shape: Shape) {
  if (shape.kind === 'circle') {
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
}

//Exhaustiveness checking
function getArea2(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const circle: Circle = {
  kind: 'circle',
  radius: 5,
};

const square: Square = {
  kind: 'square',
  sideLength: 5,
};

const triangle: Triangle = {
  kind: 'triangle',
  sideLength: 10,
};

console.log(getArea2(circle));
console.log(getArea2(square));
// console.log(getArea2(triangle));
