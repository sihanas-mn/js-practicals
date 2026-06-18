let findMax = function(a, b) {
    if (a > b) {
        return a
    } else if (a == b) {
        return "same values"
    } else {
        return b
    }
}

let result = findMax(-1, -1) 
console.log(result)