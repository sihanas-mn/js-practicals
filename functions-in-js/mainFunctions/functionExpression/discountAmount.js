let discount = function(amount, discountPercent) {
    let discounted = amount * (discountPercent / 100)
    return amount - discounted
}

let result = discount(1000, 10)
console.log(result)