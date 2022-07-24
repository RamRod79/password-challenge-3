let characterLength = 8;
let chioceArr = [];

let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',]
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// 1. Prompt user for the password criteria
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page

// Assignment code here
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let validPrompts = getPrompts();
        let passwordText = document.querySelector("#password");

  if (validPrompts) {
      let validpassword = generatePassword();
      passwordText.value = validpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  let password = "";
  for(let i = 0; i < characterLength; i++) {
      let randomIndex = Math.floor(Math.random() * chioceArr.length);
      password = password + chioceArr[randomIndex];
  } 
  return password;
}

function getPrompts () {
  chioceArr = [];
  
  characterLength = parseInt(prompt("How many character would you like your passsword to be?. Your password must be a minimum of 8 characters and a maximum of 128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Please enter a numerical value that must be a minimum of 8 characters and a maximum of 128")
    return false;
  }

  if (confirm("Click OK to confirm including special characters")) {
    chioceArr = chioceArr.concat(specialCharacters);
  }
  if (confirm("Click OK to confirm including numbers")) {
    chioceArr = chioceArr.concat(numericCharacters);
  }
  if (confirm("Click OK to confirm including lowercase letters")) {
    chioceArr = chioceArr.concat(lowerCasedCharacters);
  }
  if (confirm("Click OK to confirm including uppercase letters")) {
    chioceArr = chioceArr.concat(upperCasedCharacters);
  }
  return true;
}
