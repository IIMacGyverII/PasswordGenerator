// Assignment Code

// const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
//  delete the fallowing line
// const clipboard = document.getElementById('clipboard');

let lowercase = window.confirm("Would you like to use lower case?");
let uppercase = window.confirm("Would you like to use upper case?");
let numbers = window.confirm("Would you like to use numbers?");
let symbols = window.confirm("Would you like to use upper case?");
let length = window.prompt("Length?");
  // let person = prompt("Length of password?");

const randomFunc = {
	lower: genRandomLower,
	upper: genRandomUpper,
	number: genRandomNumber,
	symbol: genRandomSymbol,
}
let typsecount = lowercase + uppercase;

// change this to window prompt
generate.addEventListener('click', () => {
	// const length = +lengthEl.value;

	
	// resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  console.log(length)
  console.log(lowercase + uppercase + numbers +symbols);
  for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

});

  
// 


// random number generation
function genRandomLower() {
  const symbols = 'abcdefghijklmnopqrstuvwxyz';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function genRandomUpper() {
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function genRandomNumber() {
  const symbols = '1234567890';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function genRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// alphabet
console.log(genRandomLower());
console.log(genRandomUpper());
console.log(genRandomNumber());
console.log(genRandomSymbol());


// 
// let generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// //  random number generator test
// console.log(Math.floor(Math.random() * 26));

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }