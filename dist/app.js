"use strict";
var _a;
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
var fetchedUserData = {
    id: 'user1',
    name: 'Andrew',
};
var title = (_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title;
console.log(title);
var userInput = null;
var storedData = userInput || 'DEFAULT';
var storedData2 = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData2);
//# sourceMappingURL=app.js.map