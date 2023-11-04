
  
var generateBtn = document.querySelector("#generate",)


function writePassword() {
  var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*"];
  
  plength = parseInt(prompt("pasword length",));
  if (plength < 8) {
    window.alert("must be atleast 8 character's long!!");
  }
  else if (plength > 128) {
    window.alert("cannot be more then 128 character's!!");
  }
  else {
    var password = "";
    for (var i = 0; i < plength; i++) {
      var plength = Math.floor(Math.random() * char.length);
      password = password + char[plength];
    
    }
  }
  console.log(password);
  console.log(plength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
  
};

// Add event listener to generate button
generate.addEventListener("click", writePassword );


