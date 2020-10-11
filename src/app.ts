// it's conventional to start with a capital letter for a decorator
// decorators receive arguments!
// when added to a class, there is one argument, which is the class's constructor
// decorators run when the class is *defined*, not when it is instantiated!
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// decorator factory allows us to customize behavior
// it's basically a function that returns a decorator function, instead of just
// the decorator function itself
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    console.log('rendering template');
    const element = document.getElementById(hookId);
    const person = new constructor();
    if(element) {
      element.innerHTML = template;
      element.querySelector('h1')!.textContent = person.name;
    }
  }
}

// decorator functions run in REVERSE order, i.e. from bottom up
// but...the decorators themselves, i.e. Logger() and WithTemplate(), run top down
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>Person</h1>', 'app')
class Person {
  name = 'Andrew';

  constructor() {
    console.log('creating person');
  }
}

// const person = new Person();
// console.log(person);

/*** property decorators ***/

// target is object prototype for an instance property, or class constructor for static property
// propertyName is name of decorated property
// property decorators ALSO execute when the class (and thus the property) is defined
function PropertyLog(target: any, propertyName: string) {
  console.log('Property decorator');
  console.log(target);
  console.log(propertyName);
}

// target is same as above
// name is accessor name
// descriptor is a PropertyDescriptor, which is a built-in TS type
function AccessorLog(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// same as accessor decorator params
function MethodLog(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// name is the method, not the parameter
// position is position of parameter in method args, starting from 0
function ParameterLog(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyLog
  title: string;
  private _price: number;

  @AccessorLog
  set price(newPrice: number) {
    if(newPrice && newPrice > 0) {
      this._price = newPrice;
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodLog
  getPriceWithTax(@ParameterLog tax: number) {
    return this.price * (1 + tax);
  }
}