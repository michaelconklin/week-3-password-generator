// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// starting fresh code here
// prompt for critera
  // min 8 character
  // max 128 character
// confirm add lowercase
// confirm add uppercase
// 
