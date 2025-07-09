document.addEventListener('DOMContentLoaded', () => {
  let passwordForm = document.getElementById('enter-password');
  let guess = passwordForm.elements["password"];
  
  passwordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let guessedPassword = guess.value;
    // There is no correct password :O
    // If you figure the solution, remember to input it into the URL

    // This line has an XSS vulnerability - user input can be added to the webpage
    document.write(`${guessedPassword} is incorrect!` + 
                  `<a href="?">Try again</a>`);
  });
});
