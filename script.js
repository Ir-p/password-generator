// Array of numberic characters to be included in password
var numericCharacters = [
  '0',
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

// Array of uppercase characters to be included in password
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
  'Z'
];
// Array of lowercase characters to be included in password
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
  'z'
];
// Array of special characters to be included in password
var specialCharacters = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  ',',
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '>',
  '=',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '{',
  '}',
  '|',
  '~',
  '\\'
];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// To set a function for user password options
function getUserOptions() {
  // To set variables for options
  var lowerCaseChosen = false;
  var upperCaseChosen = false;
  var numericCaseChosen = false;
  var specialCaseChosen = false;
  var lengthChosen;

  // To ask for length choice
  lengthChosen = prompt("How long would you like your password to be?");
  lengthChosen = parseInt(lengthChosen);

    // Conditional statement to check if the chosen number of characters is between 8 and 128.
    if (lengthChosen < 8 || lengthChosen > 128) {
      alert ("Please provide a number between 8 and 128.");
    }
  // Ask for a lowercase letter
  lowerCaseChosen = confirm("Would you like to use lowercase letters in your password?");
  // Ask for an uppercase letter
  upperCaseChosen = confirm("Would you like to use uppercase letters in your password?");
  // Ask for a numeric character
  numericCaseChosen = confirm("Would you like to use numeric characters in your password?");
  // Ask for a special character
  specialCaseChosen = confirm("Would you like to use speical characters in your password?");
 
  // Conditional statement to check if at least one number, uppercase, lowercase, and special characters are included in the password.
  if (lowerCaseChosen === false && 
    upperCaseChosen === false && 
    numericCaseChosen === false &&
    specialCaseChosen === false) {
    alert ("Please select at least one number, uppercase, lowercase or special character.");
    return;
  }

  // Build user options
  var userOptions = {
    lowerCaseChosen: lowerCaseChosen,
    upperCaseChosen: upperCaseChosen,
    numericCaseChosen: numericCaseChosen, 
    specialCaseChosen: specialCaseChosen,
    lengthChosen: lengthChosen, 
  };
  // Return user options
  return userOptions;
}

function getRandomFromLength(arr) {
  return Math.floor(Math.random()* arr.length);
}
function generatePassword () {
  var passwordArray = [];
  var mustHaveCharacters = [];
  var canHaveCharacters = [];
  var userOptions = getUserOptions();

  if (userOptions.upperCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(upperCasedCharacters)
    // Add to must haves 1 uppercase letter
    mustHaveCharacters.push(upperCasedCharacters[getRandomFromLength(upperCasedCharacters)])
  }

  if (userOptions.lowerCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(lowerCasedCharacters)
    // Add to must haves 1 lowercase letter
    mustHaveCharacters.push(lowerCasedCharacters[getRandomFromLength(lowerCasedCharacters)])
  }

  if (userOptions.specialCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(specialCharacters)
    // Add to must haves 1 special character
    mustHaveCharacters.push(specialCharacters[getRandomFromLength(specialCharacters)])
  }
  
  if (userOptions.numericCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(numericCharacters)
    // Add to must haves 1 numeric character
    mustHaveCharacters.push(numericCharacters[getRandomFromLength(numericCharacters)])
  }

  // Loop through the lengthChosen
  for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++) {
    // Add a random character to the passwordArray from the possible characters
    passwordArray.push(canHaveCharacters[getRandomFromLength(canHaveCharacters)]);
  }

    // Loop through must haves and replace a character in the passowrdArray
    for (let i = 0; i < mustHaveCharacters.length; i++) {
      password[i] = mustHaveCharacters[i];
    }

    // PasswordArray to string (join method)
    passwordArray = passwordArray.join("");

    return passwordArray;
}

// Write password to the #password input
function writePassword() {
  console.log (writePassword)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
