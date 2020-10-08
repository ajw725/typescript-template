const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: 'Andrew',
  age: 29,
  hobbies: ['Running', 'Music'],
  role: [2, 'Author']
};

let favoriteFoods: string[];

console.log(person.name);

// person.role[1] = 10; // not allowed
// person.role = [1, 'def', 'ghi']; // not allowed
// person.role.push('abc'); // this one IS allowed. typescript can't catch everything

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}