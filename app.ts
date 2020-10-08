function combine(
  input1: number | string,
  input2: number | string,
  resultType: 'string' | 'number'
  ) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if(resultType === 'number') {
    return +result;
  }

  return result.toString();
}

const combinedAges = combine(30, 26, 'number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'number');
console.log(combinedStringAges);

const combinedWords = combine('cat', 'dog', 'string');