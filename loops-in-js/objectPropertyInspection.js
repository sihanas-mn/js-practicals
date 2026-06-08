let car = {
    brand : "Honda",
    lineup : "Civic",
    model : "FK7",
    cilinderCapacity : "800 CC",
    engin : "V7"
}

for (let [key, value] of Object.entries(car)) {
    console.log(key, value)
}