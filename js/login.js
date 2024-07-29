// login.js
document.addEventListener('DOMContentLoaded', function () {
     const openLoginModalButton = document.getElementById('openLoginModal');
     const loginModal = document.getElementById('loginModal');
     const closeLoginModalButton = document.getElementById('closeLoginModal');
     const loginForm = document.getElementById('loginForm');
     const loginUsername = document.getElementById('login-username');
     const loginPassword = document.getElementById('login-password');
     const loginErrorMessage = document.getElementById('login-error-message');
     const registrationData = JSON.parse(localStorage.getItem('registrationData')) || [];

     openLoginModalButton.addEventListener('click', function () {
          loginModal.style.display = 'block';
     });

     closeLoginModalButton.addEventListener('click', function () {
          loginModal.style.display = 'none';
     });

     loginUsername.addEventListener('input', validateLoginUsername);
     loginPassword.addEventListener('input', validateLoginPassword);

     function validateLoginUsername() {
          const username = loginUsername.value;
          const loginUsernameError = document.getElementById('login-username-error');
          if (username.length < 3) {
               loginUsernameError.textContent = 'Full name must be at least 3 characters long.';
          } else {
               loginUsernameError.textContent = '';
          }
     }

     function validateLoginPassword() {
          const password = loginPassword.value;
          const loginPasswordError = document.getElementById('login-password-error');

          if (password.length < 6) {
               loginPasswordError.textContent = 'Password must be at least 6 characters long.';
          } else {
               loginPasswordError.textContent = '';
          }
     }

     loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const username = loginUsername.value;
          const password = loginPassword.value;
          const userFound = registrationData.some((user) => user.fullName === username && user.password === password);
          if (username === "aibyn18" && password === "aibyn18") {
               window.location.href = 'admin.html';
          } else if (userFound) {
               alert('Welcome');
          } else {
               alert('User not found');
          }
     });
});