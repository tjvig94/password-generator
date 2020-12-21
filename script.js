function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }

// function generatePassword() {
//   let charset = 
//       length = 8,
//       password = "";
//       for (var i = 0, n = charset.length; i < length; ++i) {
//         password += charset.charAt(Math.floor(Math.random() * n));
        
//       }
//       return password;
// }

function generatePassword1() {
  let length = 8,
      password = "";
      for (var i = 0; i < length; i++) {
        if (document.getElementById("btncheck1").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*26)+97);
        } else if (document.getElementById("btncheck2").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*26)+65);
        } else if (document.getElementById("btncheck2").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*10)+48);
        } else if (document.getElementById("btncheck2").checked == true) {
          password += String.fromCharCode(Math.floor(Math.random()*15)+33);
        }
        
        else {
          prompt("You need to check a box.");
        }
      }

      return password
}