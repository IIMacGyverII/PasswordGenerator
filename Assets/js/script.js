let generateBtn = document.querySelector("#generate");
let result = []
let generatedPasswordLength; 

function writePassword() { 
  generatedLowercase()
  generatedUppercase()
  generatedNumber()
  generatedSymbol()
  let passwordLength = generatedPassLength()
  console.log(passwordLength);
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  result = [] 
}

generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  let password = "";
  for (let i = 0; i < generatedPasswordLength; i++) {
    password += result[Math.floor(Math.random()*result.length)]
  }
  return password;
}

function generatedLowercase() {
  let generatedLowerLetters = window.confirm("Would you like to use lowercase letters?")
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  if (generatedLowerLetters === true) {
    result = result.concat(lowerCase.split(""))
}}

function generatedUppercase() {
  let generatedUpperLetters = window.confirm("Would you like to use uppercase letters?")
  let generatedUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (generatedUpperLetters === true) {
      result = result.concat(generatedUppercase.split(""))
}}

function generatedNumber() {
  let userWantsNumbers = window.confirm("Would you like to use numbers?")
  let generatedNumber = "0123456789"
  if (userWantsNumbers === true) {
    result = result.concat(generatedNumber.split(""))
}}

function generatedSymbol() {
  let userWantsSymbols = window.confirm("Would you like to use symbols?")
  let generatedSymbol = "!@#$%^&*()~`_-+=}{[]:;?/>.<,"
  if (userWantsSymbols === true) {
    result = result.concat(generatedSymbol.split(""))
}}

function generatedPassLength() {
  generatedPasswordLength = window.prompt("Password Length?");
  return generatedPasswordLength
  }