//Types by Inference
let helloWorld: string = 'Hello World';

//Defining Types
interface User {
  name: string;
  id: number;
}
const user: User = {
  name: 'Hayes',
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount('Murphy', 1);

function deleteUser(user: User) {
  console.log('User deleted');
}

function getAdminUser(): User {
  return {
    name: 'test user name',
    id: 0,
  };
}

//Composing Types
type MyBool = true | false;

type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let window: WindowStates = 'open';

function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}

//Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const names: ObjectWithNameArray = [{ name: 'Andrey' }];

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// declare const backpack: Backpack<string>;

// const object = backpack.get();
// backpack.add('Andrey');

// Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point): void {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, heoght: 80 };
logPoint(rect);

const color = { hex: '#187ABF' };
// logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new VirtualPoint(13, 56);
logPoint(newPoint);
