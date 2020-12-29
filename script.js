function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }

function generatePassword() {
  let length = document.getElementById('customRange1').value,
      password = "";
      for (var i = 0; i < length; i++) {
        if (document.getElementById("btncheck1").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*26)+97);
        }  else {}
        if (document.getElementById("btncheck2").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*26)+65);
        } else{} 
        if (document.getElementById("btncheck3").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*10)+48);  
        }  else {}
        if (document.getElementById("btncheck4").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*15)+33);
        }
        
        else {}
      }

      document.getElementById("generate").placeholder = password;
}

passwordGen.addEventListener("click", generatePassword);

