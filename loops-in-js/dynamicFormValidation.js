let formInputs = {
  firstName: "",
  lastName: "Cris",
  email: "akocris@gmail.com",
  newPassword: "",
};

for (let key of Object.keys(formInputs)) {
  while (!formInputs[key]) {
    formInputs[key] = prompt(`please enter a value for ${key}: `);
  }
}

for (let [key, value] of Object.entries(formInputs)) {
    console.log(key, value)
}