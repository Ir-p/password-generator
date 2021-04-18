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

// To set a function for user password options
function getUserOptions() {
  // To ask for length choice as a string
  var lengthChosen = parseInt(
    prompt('How many characters would you like your password to include?')
  );
  
  // If-statement to check if the value was entered as a number and an alert to prompt the password length to be entered as a number.
  if (isNaN(lengthChosen) === true) {
    alert('Please enter the password length as a number.');
    return;
  }

  // If-statement to check if the chosen password length is between 8 and 128 and an alert to prompt the user to enter the password as a number between 8 and 128. 
  if (lengthChosen < 8 || lengthChosen > 128) {
    alert ('Please provide a number between 8 and 128.');
    return;
  }

  // Ask for an uppercase letter
  var upperCaseChosen = confirm("Would you like to use uppercase letters in your password?");

  // Ask for a lowercase letter
  var lowerCaseChosen = confirm("Would you like to use lowercase letters in your password?");

  // Ask for a numeric character
  var numericCaseChosen = confirm("Would you like to use numeric characters in your password?");

  // Ask for a special character
  var specialCaseChosen = confirm("Would you like to use speical characters in your password?");
 
  // Conditional statement to check if at least one number, uppercase, lowercase, and special characters are included in the password.
  if (
    upperCaseChosen === false && 
    lowerCaseChosen === false && 
    numericCaseChosen === false &&
    specialCaseChosen === false
  ) {
    alert ("Please select at least one number, uppercase, lowercase or special character.");
    return;
  }

  // Build user options
  var userOptions = {
    lengthChosen: lengthChosen,
    upperCaseChosen: upperCaseChosen,
    lowerCaseChosen: lowerCaseChosen,
    numericCaseChosen: numericCaseChosen, 
    specialCaseChosen: specialCaseChosen,
  };

  // Return user options
  return userOptions;
}

// To get a random element from an array using the function
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// To generate a password with user input
function generatePassword() {
  var userOptions = getUserOptions();
  // To set variables for concatenated password, selected "must have characters" array, and selected "can have charactesr" array. 
  var passwordArray = [];
  var mustHaveCharacters = [];
  var canHaveCharacters = [];

  if (userOptions.upperCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(upperCasedCharacters);
    // Add to must haves 1 uppercase letter
    mustHaveCharacters.push(getRandom(upperCasedCharacters));
  }

  if (userOptions.lowerCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(lowerCasedCharacters);
    // Add to must haves 1 lowercase letter
    mustHaveCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (userOptions.numericCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(numericCharacters);
    // Add to must haves 1 numeric character
    mustHaveCharacters.push(getRandom(numericCharacters));
  }

  if (userOptions.specialCaseChosen) {
    // Add to possible characters
    canHaveCharacters = canHaveCharacters.concat(specialCharacters);
    // Add to must haves 1 special character
    mustHaveCharacters.push(getRandom(specialCharacters));
  }
  console.log('canHaveCharacters: ', canHaveCharacters)
  // Loop through the lengthChosen and add a random character to the passwordArray from the possible characters
  for (let currIndx = 0; currIndx < userOptions.lengthChosen; currIndx++) {
    console.log('method:', canHaveCharacters[getRandom(canHaveCharacters)])
    passwordArray.push(canHaveCharacters[getRandom(canHaveCharacters)]);
  }
  console.log(passwordArray)
  // Loop through must haves and replace a character in the passowrdArray
  for (var i = 0; i < mustHaveCharacters.length; i++) {
    password[i] = mustHaveCharacters[i];
  }

  // PasswordArray to string (join method)
  passwordArray = passwordArray.join("");
  return passwordArray;

}

// Connect to the "generate" element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
