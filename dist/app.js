"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log('rendering template');
        const element = document.getElementById(hookId);
        const person = new constructor();
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1').textContent = person.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Andrew';
        console.log('creating person');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate('<h1>Person</h1>', 'app')
], Person);
function PropertyLog(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(newPrice) {
        if (newPrice && newPrice > 0) {
            this._price = newPrice;
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    PropertyLog
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map