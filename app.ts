let userInput: unknown;
let userName: string;

userInput = 5; // ok
userInput = 'Andrew'; // ok
// userName = userInput; // NOT ok! this would work if userInput had type any

if(typeof userInput === 'string') {
  userName = userInput; // ok, because we checked type first
}

function generateError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

generateError('An error occurred', 500);