function copyPassword() {
  // Get the text field
  const passwordInput = document.getElementById("password-input");

  // Select the text field
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(passwordInput.value);
}
