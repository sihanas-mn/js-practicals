let taxAmount = function(salary, taxPercent) {
    return salary * (taxPercent / 100)
}

let result = taxAmount(11000, 6)

console.log(result)