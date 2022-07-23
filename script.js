// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Assignment code here
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',]
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get references to the #generate element

let generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomCharacter= arr[randomIndex];
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

   console.log(randomCharacter);
   return randomCharacter;

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// iterate through all password options, asking is user wants range of password, special characters, numbers, lower & upper case letters 

let numOfCharacters = parsInt(prompt("How many characters would you like your password to contain?"));
let confirmSpecialCharacters = confirm("Click OKto confirm including special characters")
let confirmNumbers = confirm("Click OKto confirm including numbers")
let confirmLowerCase = confirm("Click OKto confirm including lower case letters")
let confirmUpperCase = confirm("Click OKto confirm including UPPER case letters")

let finalPassword = [];

while (finalPassword.length < numOfCharacters) { }
// //***Make sure User has at least one from each 
    
for (let i = 0, finalPassword.length < numOfCharacters; i++) {
//     if (wantsRice && finalBurrito.length < numOfIngredients) {
//         let randomRice = getRandomIngredient(rice);
//         finalBurrito.push(randomRice);
//     }
// }

// if (wantsRice) {
//     let randomrice = getRandomIngredient(rice);
//     finalBurrito.push(randomRice);
// }

// if (wantsProtein) {
//     let randomProtein = getRandomIngredient(protein);
//     finalBurrito.push(randomProtein);
// }

// if (wantsSalsa) {
//     let randomSalsa = getRandomIngredient(salsa);
//     finalBurrito.push(randomSalsa);
// }

// if (wantsSalsa) {
//     let randomSalsa = getRandomIngredient(salsa);
//     finalBurrito.push(randomSalsa);
// }


// // get random option from each list of wanted ingredients

// // let the user know thei burrit is 
