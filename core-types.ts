// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: 'Andrew',
//   age: 29,
//   hobbies: ['Running', 'Music'],
//   role: [2, 'Author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Andrew',
  age: 29,
  hobbies: ['Running', 'Music'],
  role: Role.ADMIN
};
