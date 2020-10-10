type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// use intersection operator to combine attributes of other types.
// NOTE: also possible with interfaces, i.e. Admin and Employee interfaces, then
// interface ElevatedEmployee extends Employee, Admin
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Andrew',
  privileges: ['create-server'],
  startDate: new Date()
};

// you can also do this with union types!
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // before, we had to write a type guard using typeof like this:
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

// without an overload, the add function returns a combinable. so if we did
const result = add('abc', ' def');
// then we wouldn't be able to do this:
console.log(result.split(' '));

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(employee: UnknownEmployee) {
//   console.log(`Name: ${employee.name}`);

//   // this doesn't work because a regular Employee doesn't have privileges, BUT
//   // typeof (i.e. regular JS) doesn't know about the Employee type, so we can't use that!
//   // console.log(`Privileges: ${employee.privileges}`);

//   // we can do this:
//   if('privileges' in employee) {
//     console.log(`Privileges: ${employee.privileges}`);
//   }
//   if('startDate' in employee) {
//     console.log(`Start date: ${employee.startDate}`);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log('driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log(`loading ${amount} cargos...`);
//   }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // can't do this because only Truck has loadCargo
//   // vehicle.loadCargo();

//   // could do this:
//   // if('loadCargo' in vehicle) {
//   //   vehicle.loadCargo(1000);
//   // }

//   // but could also do this, because Car and Truck are classes:
//   if(vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // discriminated unions

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   // we could check if flyingSpeed in animal, etc...but that's not very efficient
//   // and we can't use instanceof because we're working with interfaces (TS), not classes (JS)
//   // so we create a discriminated union:
//   // add a "type" property on each interface, and then we can check it in conditionals

//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//     default:
//       speed = 0;
//   }
//   console.log(`Speed: ${speed}`);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 30 });
// moveAnimal({ type: 'horse', runningSpeed: 40 });

// const para = document.querySelector('p'); // has type HTMLParagraphElement | null
// const para2 = document.getElementById('message'); // has type HTMLElement | null

// // this doesn't work because TS sees input as just a regular HTML element,
// // not specifically as an input
// const input = document.getElementById('user-input')!;
// // input.value = 'hi there';

// // so instead, we cast it as an input element.
// // NOTE: type-casting implicitly adds the "!" to tell TS the element will be present
// const realInput = <HTMLInputElement>document.getElementById('user-input');
// realInput.value = 'hello';

// // to avoid conflicts with JSX in React, there is a different syntax:
// const realInput2 = document.getElementById('user-input') as HTMLInputElement;
// // OR:
// const realInput3 = document.getElementById('user-input')!;
// console.log((realInput3 as HTMLInputElement).value);

// // index properties
// // want to hold error object with arbitrary keys, like
// // { email: 'Not a valid email', username: 'Must start with a letter' }
// interface ErrorContainer {
//   [prop: string]: string; // this object can have any number of arbitrary string properties, with string values
// };

// const errors: ErrorContainer = {
//   email: 'Not a valid email!',
//   foo: 'bar'
// };
// console.log(errors);