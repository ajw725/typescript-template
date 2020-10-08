let userInput: unknown;
let userName: string;

userInput = 5; // ok
userInput = 'Andrew'; // ok
// userName = userInput; // NOT ok! this would work if userInput had type any

if(typeof userInput === 'string') {
  userName = userInput; // ok, because we checked type first
}