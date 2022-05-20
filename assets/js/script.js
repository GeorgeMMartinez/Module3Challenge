// Assignment code here
var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOptions = "123456789";
var symbolsOptions = "!@#$%^&*()+{}[]<>?";
var passwordOption = "";

function generatePassword() {
  event.preventDefault()
  var lengthChoice = window.prompt("Enter Password Length:")
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    generatePassword()
  } else {
  var uppercase = window.confirm("Click OK to include uppercase letters");
  var lowercase = window.confirm("CLick OK to include lowercase letters");
  var numbers = window.confirm("Cick OK to include numbers");
  var symbols = window.confirm("Click OK to include special characters");

  if (uppercase) {
    passwordOption += uppercaseOptions;
  }

  if (lowercase) {
    passwordOption += lowercaseOptions;
  }

  if (numbers) {
    passwordOption += numberOptions;
  }

  if (symbols) {
    passwordOption += symbolsOptions;
  }

  for (var i = 0; i < lengthChoice; i++) {
    var randomNumber = Math.floor(Math.random() * passwordOption.length);
    password += passwordOption.substring(randomNumber,randomNumber+1);
  }
 
  return password;
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
