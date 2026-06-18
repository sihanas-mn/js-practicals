let calculateSalary = (basicSalary, callback) => {
    return callback(basicSalary)
}

let finalSalary = (amount) => {
    return amount + 5000
}

let results = calculateSalary(50000,finalSalary)

console.log(results)