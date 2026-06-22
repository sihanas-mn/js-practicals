function calculateDiscount(productPrice, discountPercentage) {
    return priceAfterDiscount = productPrice - (productPrice * (discountPercentage / 100))
}

let finalPrice = calculateDiscount(1000, 10)

console.log(finalPrice)