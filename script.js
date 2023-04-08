const generateBtn = document.querySelector('#generate');
const lengthInput = document.querySelector('#length');
const passwordText = document.querySelector('#password');

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

generateBtn.addEventListener('click', () => {
  let password = '';
  const length = parseInt(lengthInput.value);
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordText.value = password;
  checkPasswordStrength(password)
});

function checkPasswordStrength(password) {
  const passwordStrength = document.getElementById("password-strength");
  const bar = document.querySelector(".bar");
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/g;

  let strength = 0;

  // Check password length.
  if (password.length >= 8) {
    strength++;
  }

  // Check for lower case letters.
  if (password.match(lowerCaseLetters)) {
    strength++;
  }

  // Check for upper case letters.
  if (password.match(upperCaseLetters)) {
    strength++;
  }

  // Check for numbers.
  if (password.match(numbers)) {
    strength++;
  }

  // Check for symbols.
  if (password.match(symbols)) {
    strength++;
  }

  // Display password strength.
  switch (strength) {
    case 0:
    case 1:
      passwordStrength.innerText = "Weak";
      passwordStrength.style.color = "Red";
      bar.style.width = "20%";
      bar.className = "bar weak";
      break;
    case 2:
      passwordStrength.innerText = "Fair";
      passwordStrength.style.color = "Orange";
      bar.style.width = "40%";
      bar.className = "bar fair";

      break;
    case 3:
      passwordStrength.innerText = "Good";
      passwordStrength.style.color = "Yellowgreen";
      bar.style.width = "60%";
      bar.className = "bar good";
      break;
    case 4:
      passwordStrength.innerText = "Strong";
      passwordStrength.style.color = "Green";
      bar.style.width = "80%";
      bar.className = "bar strong";
      break;
    case 5:
      passwordStrength.innerText = "Very Strong";
      passwordStrength.style.color = "darkgreen";
      bar.style.width = "100%";
      bar.className = "bar very-strong";
      break;
    default:
      break;
  }
}
