// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var char = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symbols = "!@#$%^&*-_+=";
var result = "";

function writePassword() {
  var length = prompt("How long would you like your password to be?");
  console.log(length);

  if (length < 8 || length > 128) {
    alert("Please pick a length between 8 and 128");
    writePassword();
  }

  var lowercase = confirm("Do you want lowercase characters?");
  if (lowercase === true) {
    result = result + char;
    console.log(result);
  }
  var uppercase = confirm("Do you want uppercase characters?");
  if (uppercase === true) {
    result += upperChar;
    console.log(result);
  }
  var numbers = confirm("Do you want to add numbers?");
  if (numbers === true) {
    result = result + num;
    console.log(result);
  }
  var symbol = confirm("Do you want to add symbols?");
  if (symbol === true) {
    result = result + symbols;
    console.log(result);
  }
  if (!lowercase && !uppercase && !numbers && !symbol) {
    alert("Please select a character type!");
    writePassword();
  }
  var pwd = "";
  for (var i = 0; i < length; i++) {
    pwd += result.charAt(Math.floor(Math.random() * result.length));
  }
  console.log(pwd);
  passwordText.value = pwd;
}
generateBtn.addEventListener("click", writePassword);
