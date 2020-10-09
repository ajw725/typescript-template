// creating a function type:
// type AddFn = (a: number, b: number) => number;

// creating a function interface:
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1, n2) => n1 + n2;

interface Named {
  readonly name: string;
}

// an interface, unlike a class, can extend *multiple* other interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, private age: number) {}

  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  }
}

// let user1: Greetable;
// user1 = {
//   name: 'Andrew',
//   //age: 29,
//   greet(phrase: string) {
//     console.log(`${phrase}, ${this.name}`);
//   }
// };

const user1 = new Person('Andrew', 29);
user1.name = 'new name';
user1.greet('Hello');

let user2: Greetable;
user2 = {
  name: 'Bodie',
  greet(phrase: string) {
    console.log('Hi');
  }
};
// user2.name = 'Bear'; // doesn't work because name is readonly
