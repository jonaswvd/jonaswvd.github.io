const signUpForm = document.getElementById('form');
const emailField = document.getElementById('emailField');
const okButton = document.getElementById('okButton');
  
emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});
  
okButton.addEventListener('click', function (event) {
  signUpForm.submit();
});