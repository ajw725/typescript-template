var person = {
    name: 'Andrew',
    age: 29,
    hobbies: ['Running', 'Music'],
    role: [2, 'Author']
};
var favoriteFoods;
console.log(person.name);
// person.role[1] = 10; // not allowed
// person.role = [1, 'def', 'ghi']; // not allowed
// person.role.push('abc'); // this one IS allowed. typescript can't catch everything
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
