const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');
const pwCError = document.getElementById('password-error');




passwordCheck.addEventListener('input', () => {
  if (password.value !== passwordCheck.value) {
    pwCError.textContent = 'Passwords do not match';
  } else {
    pwCError.textContent = '';
  }
})