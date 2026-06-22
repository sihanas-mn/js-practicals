//task 1: login attempt validation
let correctUsername = "admin";
let promptedUsername;
let attempts = 3;

promptedUsername = prompt("enter the username: ");

while (promptedUsername !== correctUsername && attempts > 0) {
  attempts--;
  console.log(`you have ${attempts + 1} attempt(s) left!`);
  promptedUsername = prompt("Enter the correct username: ");

  if (attempts < 1) {
    console.log(`you dont have enough attempts left!`);
  }
}

if (correctUsername === promptedUsername) {
  console.log("your username is correct!");
}

