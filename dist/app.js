"use strict";
var Department = (function () {
    function Department(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.hire = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printRoster = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var dept = new Department('1', 'Engineering', []);
console.log(dept);
dept.hire('Jack');
dept.hire('Jill');
dept.printRoster();
//# sourceMappingURL=app.js.map