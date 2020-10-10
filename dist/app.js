"use strict";
var e1 = {
    name: 'Andrew',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log("Name: " + employee.name);
    if ('privileges' in employee) {
        console.log("Privileges: " + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log("Start date: " + employee.startDate);
    }
}
printEmployeeInformation(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving...');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading " + amount + " cargos...");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
    }
    console.log("Speed: " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 30 });
moveAnimal({ type: 'horse', runningSpeed: 40 });
//# sourceMappingURL=app.js.map