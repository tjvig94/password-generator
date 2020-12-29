function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~!@#$%^&*-_=+/?><";

function generatePassword() {
  let characters = "";
  (btncheck1.checked) ? characters += lower : "";
  (btncheck2.checked) ? characters += upper : "";
  (btncheck3.checked) ? characters += num : "";
  (btncheck4.checked) ? characters += special : "";
  let passLength = document.getElementById('customRange1').value,
      password = "";
  for (var i = 0; i < passLength; i++) {
      password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

  document.getElementById("generate").placeholder = password;
}

passwordGen.addEventListener("click", generatePassword);