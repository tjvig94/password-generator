function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }


  document.getElementById("generate").addEventListener("click", () => {

          let length = document.getElementyById("textInput").value,
              charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
              password = "";
          for (var i = 0, n = charset.length; i < length; i++) {
                password += charset.charAt(Math.floor(Math.random() * n));
    
            }
            return password);
}