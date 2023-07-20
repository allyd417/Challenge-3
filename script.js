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
  '.',
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
  'z',
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
  'Z',
];

// Define the character sets to include in the password
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_+{}[]|\\:;\"',.<>/?";

// Get the button element from the DOM
var generateButton = document.getElementById("generate");

// Add an event listener to the button
generateButton.addEventListener("click", function()) {
  // Prompt the user for the password length
  var passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
  // Ensure that the password length is within the range of 8 to 128 characters
  if (passwordLength < 8) {
    passwordLength = 8;
  } else if (passwordLength > 128) {
    passwordLength = 128;
  }

  // Conformation from the user for whether to include special characters, numbers, uppercase, and lowercase letters.
  var includeSpecialChars = confirm("Do you want to include special characters? Click OK to include special characters, or Cancel to exclude them.");
  var includeNumbers = confirm("Do you want to include numbers inside of your generated password? Click OK to include numbers, or Cancel to exclude them.");
  var includeLowercaseChars = confirm("Do you want to include lowercase letters in your generated password? Click OK to include lowercase letters, or Cancel to exclude them.")
  var includeUppercaseChars = confirm("Do you want to include uppercase letters in your generated password? Click OK to include uppercase letters or Cancel to exclude them." )

  // Define the character set to use for the password
  var characterSet = "";
  if (includeUppercaseChars) {
    characterSet += uppercaseChars;
  }
  if (includeLowercaseChars) {
    characterSet += lowercaseChars;
  }
  if (includeNumbers) {
    characterSet += numberChars;
  }
  if (includeSpecialChars) {
    characterSet += specialChars;
  }

  // Generate the password
  var password = "";
  var randomValues = new Uint32Array(passwordLength);
  window.crypto.getRandomValues(randomValues);
  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(randomValues[i] % characterSet.length);
  }

  // Display the generated password to the user
  var passwordField = document.getElementById("password");
  passwordField.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
