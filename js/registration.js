// registration.js
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

document.addEventListener('DOMContentLoaded', function () {
     const registrationModal = document.getElementById("myCustomModal");
     const registrationBtn = document.getElementById("myCustomBtn");
     const registrationClose = document.querySelector("#closeCustomModal");
     const registrationForm = document.getElementById('registrationForm');
     const regUsername = document.getElementById('reg-username');
     const regEmail = document.getElementById('reg-email');
     const regAge = document.getElementById('reg-age');
     const regPassword = document.getElementById('reg-password');
     const registrationErrorMessage = document.getElementById('registration-error-message');
     const registrationData = JSON.parse(localStorage.getItem('registrationData')) || [];

     registrationBtn.onclick = function () {
          registrationModal.style.display = "block";
     };

     registrationClose.onclick = function () {
          registrationModal.style.display = "none";
     };

     window.onclick = function (event) {
          if (event.target == registrationModal) {
               registrationModal.style.display = "none";
          }
     };

     regUsername.addEventListener('input', validateUsername);
     regEmail.addEventListener('input', validateEmail);
     regAge.addEventListener('input', validateAge);
     regPassword.addEventListener('input', validatePassword);

     function validateUsername() {
          const username = regUsername.value;
          const usernameError = document.getElementById('reg-username-error');

          if (username.length < 3) {
               usernameError.textContent = 'Full name must be at least 3 characters long.';
          } else {
               usernameError.textContent = '';
          }
     }

     function validateEmail() {
          const email = regEmail.value;
          const emailError = document.getElementById('reg-email-error');

          if (!email.match(emailPattern)) {
               emailError.textContent = 'Invalid email address.';
          } else {
               emailError.textContent = '';
          }
     }

     function validateAge() {
          const age = regAge.value;
          const ageError = document.getElementById('reg-age-error');

          if (isNaN(age) || age < 18) {
               ageError.textContent = 'Age must be a number and at least 18.';
          } else {
               ageError.textContent = '';
          }
     }

     function validatePassword() {
          const password = regPassword.value;
          const passwordError = document.getElementById('reg-password-error');

          if (password.length < 6) {
               passwordError.textContent = 'Password must be at least 6 characters long.';
          } else {
               passwordError.textContent = '';
          }
     }

     registrationForm.addEventListener('submit', function (e) {
          const username = regUsername.value;
          const email = regEmail.value;
          const age = regAge.value;
          const password = regPassword.value;

          if (username.length < 3 || !email.match(emailPattern) || isNaN(age) || age < 18 || password.length < 6) {
               registrationErrorMessage.textContent = 'Please correct the errors in the form.';
               e.preventDefault();
          } else {
               registrationErrorMessage.textContent = '';
               const userData = {
                    fullName: username,
                    email: email,
                    age: parseInt(age),
                    password: password,
               };
               registrationData.push(userData);
               registrationForm.reset();
               localStorage.setItem('registrationData', JSON.stringify(registrationData));
               alert('Registration successful!' + userData.fullName);
          }
     });
});
