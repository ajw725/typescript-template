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
var result = add('abc', ' def');
console.log(result.split(' '));
//# sourceMappingURL=app.js.map