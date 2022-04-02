// Assignment Code
let lowercase = window.confirm("Would you like to use lower case?");
let uppercase = window.prompt("Would you like to use upper case?");
let numbers = window.prompt("Would you like to use numbers?");
let symbols = window.prompt("Would you like to use upper case?");
let passlength = window.prompt("Length of password?");


let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//  random number generator test
console.log(Math.floor(Math.random() * 26));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}