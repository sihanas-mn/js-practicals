let getName = () => "aski";

let greet = (callback) => `Hi ${callback()}. Welcome aboard`;

let greetResult = greet(getName);
console.log(greetResult);

// let getName = function() {
//     return 'aski'
// }

// let greet = function(funcName) {
//     return `Hi ${funcName()}. Welcome aboard`
// }

// let greetResult = greet(getName)

// console.log(greetResult)
