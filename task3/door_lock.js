import {password} from '../password.js';

document.addEventListener('DOMContentLoaded', () => {
  let passwordForm = document.getElementById('enter-password');
  let guess = passwordForm.elements["password"];
  
  passwordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // If we're being iframed, let the parent know our URL
    // parent.postMessage(window.location.toString(), "*");
    let guessedPassword = guess.value;
    if (guessedPassword !== password) {
      document.write(`${guessedPassword} is incorrect!` + 
                    `<a href="?">Try again</a>`);
    } else {
      alert("Correct! Change the URL to enter the house");
    }
  });
});
