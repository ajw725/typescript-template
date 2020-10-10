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
//# sourceMappingURL=app.js.map