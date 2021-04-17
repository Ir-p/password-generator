// Array of numberic characters to be included in password
var numericCharacters = [
  '0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  '\\',
  '^',
  '_',
  '{',
  '}',
  '|',
  '~'
]
// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUserOptions() {
  // set variables for options
  var lowerCaseChosen = false;
  var upperCaseChosen = false;
  var numericChosen = false;
  var specialChosen = false;
  var lengthChosen;

  lengthChosen = prompt("How would you like your password to be?");
  //ask for length choice
  lengthChosen = parseInt(lengthChosen);

  // validation
    //at least one type selected
    if (lengthChosen < 8 || lengthChosen > 128) {
      alert ("Please provide a number between 8 and 128.");
      return;
    }
  // ask for lowercase
  lowerCaseChosen = confirm("Would you like to use lowercase letters in your password?");
  // ask for uppercase
  upperCaseChosen = confirm("Would you like to use uppercase letters in your password?");
  // ask for numeric character
  numericCaseChosen = confirm("Would you like to use numeric characters in your password?");
  // ask for special character
  specialCaseChosen = confirm("Would you like to use speical characters in your password?");
 
  //TODO: check for at least one special/number upper/lower (that not all of)
  if (lowerCaseChosen === false && 
    upperCaseChosen === false && 
    numericChosen === false &&
    specialChosen === false) {
    alert ('Please select one special character class (upper/lower/special/number.')
  }

    //build options
  var userOptions = {
    lowerCaseChosen: lowerCaseChosen,
    upperCaseChosen: upperCaseChosen,
    numericChosen: numericChosen, 
    specialChosen: specialChosen,
    lengthChosen: lengthChosen, 
  };
  //return user options
  return password;
}

function getRandomFromLength (length) {
  return Math.floor(Math.random()* arr.length)
}
function generatePassword () {
  var passwordArray = [];
  var mustHaveCharacters = [];
  var canHaveCharacters = [];
  var userOptions = getUserOptions();

  if (userOptions.upperCaseChosen) {
    // add to possible characters
    canHaveCharacters = canHaveCharacters.concat(upperCasedCharacters)
    // add to must haves 1 uppercase letter
    mustHaveCharacters.push(upperCasedCharacters[getRandomFromLength(upperCasedCharacters)])
  }

  if (userOptions.lowerCaseChosen) {
    // add to possible characters
    canHaveCharacters = canHaveCharacters.concat(lowerCasedCharacters)
    // add to must haves 1 lowercase letter
    mustHaveCharacters.push(lowerCasedCharacters[getRandomFromLength(lowerCasedCharacters)])
  }

  if (userOptions.specialCaseChosen) {
    // add to possible characters
    canHaveCharacters = canHaveCharacters.concat(specialCharacters)
    // add to must haves 1 special character
    mustHaveCharacters.push(specialCharacters[getRandomFromLength(specialCharacters)])
  }
  
  if (userOptions.numericCaseChosen) {
    // add to possible characters
    canHaveCharacters = canHaveCharacters.concat(numericCharacters)
    // add to must haves 1 numeric character
    mustHaveCharacters.push(numericCharacters[getRandomFromLength(numericCharacters)])
  }
  
  // loop through the lengthChosen
  for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++) {
    //add a random character to the passwordArray from the possible characters
    console.log(passwordArray)
    passwordArray.push(canHaveCharacters[getRandomFromLength(canHaveCharacters)]);
  }

    //loop through must haves and replace a character in the passowrdArray
    for (let i = 0; i < mustHaveCharacters.length; i++) {
      passowrd[i] = mustHaveCharacters[i];
    }

    // passwordArray to string (join method)
    passwordArray = passwordArray.join("");

    return passwordArray;
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
