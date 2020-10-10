"use strict";
var names = ['Jack', 'Jill'];
var stringArray = [];
var anyArray = [];
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('done!');
    }, 2000);
});
p1.then(function (data) { return data.split(' '); });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var obj1 = { name: 'Andrew' };
var obj2 = { age: 29 };
var merged = merge(obj1, obj2);
console.log(merged);
console.log(merged.age);
merge(obj1, obj2);
//# sourceMappingURL=app.js.map