interface Greetable {
  name: string;
  //age: number;
  
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
user1.greet('Hello');
