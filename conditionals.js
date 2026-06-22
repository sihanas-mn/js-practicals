let username = "admin1";
let password = "crayon7";

if (username === "admin" && password === "crayon") {
  console.log("login successful");
} else if (username !== "admin" && password !== "crayon") {
  console.log("both are wrong :(");
} else if (username !== "admin") {
  console.log("usrname is wrong");
} else if (password !== "admin") {
  console.log("password is wrong");
}
