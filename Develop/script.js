// Assignment Code
var generateBtn = document.querySelector("#generate");


var minus = 'abcdefghijklmnopqrstuvwxyz';
var mayus = minus.toUpperCase();
var nums = '0123456789';
var special = '~!@#$%^&*()`-=_+?<>/';
var password = '';




// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var passLenght = window.prompt ("Indique la longitud de su contraseña");
  // isNaN is used to identify any value that's not a number
  // "||" <-- this is used as an "OR" statement
  if(passLenght < 8 || passLenght > 128 || isNaN(passLenght)) {
    alert("Necesitas elegir una cantidad de numeros mayor a 8 y menos a 128!");
    //return se esta usando para no guardar los datos que no entren en la rubrica y regresar al inicio de la func.
    return;
  };
    var upperCase = confirm ("Deseas Mayúsculas en tu contraseña?");
    var lowerCase = confirm ("Deseas Minúsculas en tu contraseña?");
    var numbers = confirm ("Deseas números en tu contraseña?");
    var specChar = confirm ("Deseas carácteres especiales en tu contraseña?");
    var allCharacters ='';

   if(!upperCase && !lowerCase && !numbers && !specChar) {
    alert("Necesitas elegir almenos 1 opcion entre Mayusculas, Minusculas, Numeros y Caracteres Especiales. ")
    return;
   };

   //+= helps me to add "minus" to "var randomIndex".
   if(upperCase) allCharacters += mayus;
   if(lowerCase) allCharacters += minus;
   if(numbers) allCharacters += nums;
   if(specChar) allCharacters += special;
   //this "password" cleans the log before generating a new password
   password = '';

   for (var i = 0; i < passLenght; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length );
    password += allCharacters.charAt(randomIndex);
  };

  writePassword();
});

  


