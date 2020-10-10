"use strict";
var add;
add = function (n1, n2) { return n1 + n2; };
var Person = (function () {
    function Person(n) {
        this.age = 29;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ", " + this.name);
        }
        else {
            console.log('hi');
        }
    };
    return Person;
}());
var user1 = new Person('Andrew');
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