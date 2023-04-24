var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '=',
  '_',
  '+',
  '[',
  ']',
  '{',
  '}',
  ';',
  ':',
  ',',
  '.',
  '<',
  '>',
  '/',
  '?',
  '`',
  '~',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];






function PasswordOptions() {

  var length = parseInt(
    prompt("How many characters would you like in your password?"),
  );

  if(length < 8) {
    alert("Must be at least 8 characters")
    return;
  } 

  if(length > 128) {
    alert("must be less than or equal to 128 charaters")
  }

  var numericCharacters = confirm(
    "Please confirm using numeric characters."
  );

  var specialCharacters = confirm(
    "Please confirm using special characters."
  );

  var upperCasedCharacters = confirm(
    "Please confirm using upper cased characters."
  );

  var lowerCasedCharacters = confirm(
    "Please confirm using lower cased characters."
  );

  if (
    numericCharacters === false &&
    specialCharacters === false &&
    upperCasedCharacters === false &&
    lowerCasedCharacters === false
  ) {
    alert("Please select at least one character type.");
    return null;
  }

  var passwordOptions = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters,
  };

  return passwordOptions;
};

function getRandom(array) {
  var randIndex = Math.floor(Math.random() *  array.length);
  var randElement = array[randIndex];

  return randElement;
}

function generatePassword() {
  var options = PasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var definiteCharacters = [];

  if (!options) return null;

  if (options.numericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    definiteCharacters.push(getRandom(numericCharacters));
  }

  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    definiteCharacters.push(getRandom(specialCharacters));
  }

  if (options.upperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    definiteCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.lowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    definiteCharacters.push(getRandom(lowerCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  for (var i = 0; i < definiteCharacters.length; i++) {
    result[i] = definiteCharacters[i];
  }

  return result.join("")
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
