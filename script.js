const oopsModal = new bootstrap.Modal(document.getElementById("oopsModal"), {
  keyboard: false
})

function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
}

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const special = "~!@#$%^&*-_=+/?><";

function generatePassword() {
  let characters = "";
  (lowercase.checked) ? characters += lower : "";
  (uppercase.checked) ? characters += upper : "";
  (numbers.checked) ? characters += num : "";
  (symbols.checked) ? characters += special : "";
  let passLength = document.getElementById("charNumber").value;
  let password = "";
  for (let i = 0; i < passLength; i++) {
      password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

  (lowercase.checked == false && uppercase.checked == false && numbers.checked == false && symbols.checked == false) ? oopsModal.show() : document.getElementById("passBox").value = password;
}

passwordGen.addEventListener("click", generatePassword);

function copyText() {
  let password = document.getElementById("passBox");
  password.select();
  document.execCommand("copy");
  document.getElementById("copyButton").innerHTML = "Copied!"
} 
