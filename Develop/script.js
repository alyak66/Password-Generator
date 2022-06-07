// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  size: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0,
}

// Write password to the #password input
function writePassword() {
  criteriaPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//This function generates the new password based on the criteria and attaches each character to newPassword. Once the password is built, it returns it.
var generatePassword = function() {
  var newPassword = "";
  for (i = 0; i < passwordCriteria.size; i++){
    var charType = randomNumber(1, 4);

    //Compare the new charType and if it is a type of character the user wants, it will generate a random character from the character set.
    if (charType === 1 && passwordCriteria.lowercase === 1) {
      newPassword += genLowercase();
      console.log(newPassword);
    }
    else if (charType === 2 && passwordCriteria.uppercase === 1) {
      newPassword += genUppercase();
      console.log(newPassword);
    }
    else if (charType === 3 && passwordCriteria.numeric === 1) {
      newPassword += genNumeric();
      console.log(newPassword);
    }
    else if (charType === 4 && passwordCriteria.special === 1) {
      newPassword += genSpecial();
      console.log(newPassword);
    }
    //If all else fails, use i to throw out this repeat in the loop and try again.
    else i--;
    
  }
  return newPassword;
}

//Generates random numbers between and includes min/max
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

//This function shows the user with a series of prompts to find out what criteria the password should have. The criteria is stored in a global object to make it easier for all parts of the program to access the criteria.
var criteriaPrompts = function() {
  
  while (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
    passwordCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
    if (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
      window.alert ("Please enter a password size between 8 and 128 characters!");
    }
  }

  while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
    var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");
    if (lowercaseConfirm) {
      passwordCriteria.lowercase = 1;
    }
    var uppercaseConfirm = window.confirm("Would you like to include uppercase letters?");
    if (uppercaseConfirm) {
      passwordCriteria.uppercase = 1;
    }
    var numericConfirm = window.confirm("Would you like to include numbers?");
    if (numericConfirm) {
      passwordCriteria.numeric = 1;
    }
    var specialConfirm = window.confirm("Would you like to include special characters?");
    if (specialConfirm) {
      passwordCriteria.special = 1;
    }
    if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0){
      window.alert ("You must choose at least one type of character to include in your password!");
    }
    console.log(passwordCriteria);
  }
}

//These functions generate a single character from the appropriate character set and returns it. I did not incldue all possible special characters. The character sets are based on the ASCII table, I am assuming only standard english characters and no emoji's or anything else in Unicode.
var genLowercase = function() {
  return String.fromCharCode(97 + randomNumber(0, 25));
}

var genUppercase = function() {
  return String.fromCharCode(65 + randomNumber(0, 25));
}

var genNumeric = function() {
  return String.fromCharCode(49 + randomNumber(0, 8));
}

var genSpecial = function() {
  return String.fromCharCode(33 + randomNumber(0, 14));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
