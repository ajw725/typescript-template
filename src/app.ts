// arrays in typescript are generic types!
const names = ['Jack', 'Jill']; // ts infers type
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