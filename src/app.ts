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
    const element = document.getElementById(hookId);
    const person = new constructor();
    if(element) {
      element.innerHTML = template;
      element.querySelector('h1')!.textContent = person.name;
    }
  }
}

//@Logger('LOGGING - PERSON')
@WithTemplate('<h1>Person</h1>', 'app')
class Person {
  name = 'Andrew';

  constructor() {
    console.log('creating person');
  }
}

//const person = new Person();
//console.log(person);
