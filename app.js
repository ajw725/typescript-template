function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
// combineValues = printResult; // DOES NOT COMPILE because function signature is wrong
addAndHandle(10, 20, function (result) {
    console.log(result);
});
