// arrays in typescript are generic types!
// const names = ['Jack', 'Jill']; // ts infers type
// const names2: Array = []; // invalid because we haven't specified type
const stringArray: Array<string> = []; // valid with type
const anyArray: Array<any> = []; // also valid with type any!

// promises are also generic types
const p1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done!');
  }, 2000);
});

// specifying the promise type allows us to do stuff like this:
p1.then(data => data.split(' '));

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const obj1 = { name: 'Andrew' };
// const obj2 = { age: 29 };
// console.log(merge(obj1, obj2)); 
// // the above works, BUT if we try to store it...
// const merged = merge(obj1, obj2);
// merged.age doesn't work! because TS doesn't know the return type

// turn merge into a generic function using two identifiers
// "T" and "U" are just conventions - could use anything - to show that we are receiving
// two objects potentially of DIFFERENT types!
// TS interprets the return type as T & U
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const obj1 = { name: 'Andrew' };
const obj2 = { age: 29 };
const merged = merge(obj1, obj2);
console.log(merged);
console.log(merged.age);

// you CAN provide the input types explicitly, like this, but it's redundant
merge<{ name: string }, { age: number }>(obj1, obj2);

// what if we want to impose constraints on generic types, e.g. must be objects?
function constrainedMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// this fails to compile, whereas before it would have failed silently:
// merge({ name: 'Andrew' }, 30)

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'No value';
  if(element.length > 0) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hello, world!'));
console.log(countAndDescribe(['running', 'piano']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
extractAndConvert({ name: 'Andrew' }, 'name');

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // the indexOf thing works with primitive types, but NOT with reference types like objects
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(1) => not allowed
textStorage.addItem('TypeScript');
textStorage.addItem('Ruby');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'TypeScript' });
// objStorage.addItem({ name: 'Ruby' });
// objStorage.removeItem({ name: 'TypeScript' });
// console.log(objStorage.getItems()); // still contains TypeScript!
// the way we've implemented the class, it really only works with primitive types


/*** generic utility types ***/

// partial types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Partial makes all properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // without type casting, it's still a partial type
}

// read-only types
const names: Readonly<string[]> = ['Jack', 'Nancy'];
// names.push('Stephen'); // not allowed
// names.pop(); // not allowed