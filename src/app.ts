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

@Logger('LOGGING - PERSON')
class Person {
  name = 'Andrew';

  constructor() {
    console.log('creating person');
  }
}

const person = new Person();
console.log(person);
