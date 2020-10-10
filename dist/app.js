"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
function constrainedMerge(objA, objB) {
    return Object.assign(objA, objB);
}
function countAndDescribe(element) {
    var descriptionText = 'No value';
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hello, world!'));
console.log(countAndDescribe(['running', 'piano']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Andrew' }, 'name');
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('TypeScript');
textStorage.addItem('Ruby');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map