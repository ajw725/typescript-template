function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('result: ' + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // DOES NOT COMPILE because function signature is wrong