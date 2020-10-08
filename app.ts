// const person: {
//   name: string,
//   age: number
// } = {
const person = {
  name: 'Andrew',
  age: 29,
  hobbies: ['Running', 'Music']
};

let favoriteFoods: string[];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}