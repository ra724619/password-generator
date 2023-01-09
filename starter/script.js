// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// Select the button
const button = document.querySelector("#generate");

// Add an event listener to the button
button.addEventListener("click", function() {
  getPasswordOptions();
});

// Global scope for function
let passLength;
let upper;
let lower;
let special;
let num;

// Function to prompt user for password options
function getPasswordOptions() {
// Validation for passowrd's length
  passLength = window.prompt('How long do want your password to be? Please input a number between 10 and 64');
  if (passLength < 10 || passLength >= 65 || isNaN(passLength)) {
    window.alert('The input should a number between minimum 10 and maximum 64');
    return getPasswordOptions();
  }
// Check if specific character is required in the password
  upper = confirm('Do you want to include UPPER CASE in your password?')
  lower = confirm('Do you want to include lower case in your password?')
  num = confirm('Do you want to include numeric characters (1,2,3...) in your password?')
  special = confirm('Do you want to include special characters (~!@#$%...) in your password?')
  if (!upper && !lower && !num && !special) {
    window.alert('Please select at least one character.')
    return getPasswordOptions();
  }
};

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
// The inital password
  let pass = "";
// Create an array for array concatenation
  let passChar = [];
  if (lower) {
    passChar = passChar.concat(lowerCasedCharacters);
  }
  if (upper) {
    passChar = passChar.concat(upperCasedCharacters);
  }
  if (num) {
    passChar = passChar.concat(numericCharacters);
  }
  if (special) {
    passChar = passChar.concat(specialCharacters);
  }
// Generate password randomly according to the given length of password and the concatenated array
  for (let i = 0; i < passLength; i++) {
    pass = pass + getRandom(passChar);
  }
// Return the final password
  return pass;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);