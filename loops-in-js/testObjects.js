let obj = {name : "orca", age : 21, state : "california"}

// console.log(obj.name)

for (a of obj) {
    console.log(`${a} : ${obj[a]}`)
}