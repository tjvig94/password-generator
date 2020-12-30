var oopsModal = new bootstrap.Modal(document.getElementById("oopsModal"), {
  keyboard: false
})

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
  let passLength = document.getElementById('customRange1').value;
  let password = "";
  for (var i = 0; i < passLength; i++) {
      password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

  (btncheck1.checked == false && btncheck2.checked == false && btncheck3.checked == false && btncheck4.checked == false) ? oopsModal.show() : document.getElementById("passBox").value = password;
}

passwordGen.addEventListener("click", generatePassword);

function copyText() {
  let password = document.getElementById("passBox");
  password.select();
  document.execCommand("copy");
  document.getElementById('copyButton').innerHTML = "Copied to Clipboard!";
} 

// copy button not committed yet
