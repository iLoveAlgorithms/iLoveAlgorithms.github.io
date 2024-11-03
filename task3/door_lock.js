document.addEventListener('DOMContentLoaded', () => {
  let passwordForm = document.getElementById('enter-password');
  let guess = passwordForm.elements["password"];
  
  passwordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // If we're being iframed, let the parent know our URL
    // parent.postMessage(window.location.toString(), "*");
    let guessedPassword = guess.value;
    // There is no correct password :O
    // If you figure the solution, remember to input it into the URL
    document.write(`${guessedPassword} is incorrect!` + 
                  `<a href="?">Try again</a>`);
  });
});
