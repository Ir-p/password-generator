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

function generatePassword () {

  var password = "amazing password";

  // variable definitions 

  // special chars array
  // lowercase chars array
  // uppercase chars array
  // numeric chars array
  // special chars array


  // prompts for user options

    // length // between 8 -128
    //lowercase
    // uppercase
    // numeric
    // special

  // validation
      //at least one type selected

      //else
        // alert user
  // generate password



  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
