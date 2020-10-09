"use strict";
var add;
add = function (n1, n2) { return n1 + n2; };
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ", " + this.name);
    };
    return Person;
}());
var user1 = new Person('Andrew', 29);
user1.name = 'new name';
user1.greet('Hello');
var user2;
user2 = {
    name: 'Bodie',
    greet: function (phrase) {
        console.log('Hi');
    }
};
//# sourceMappingURL=app.js.map