let average = (total) => total / marks.length

let total = 0
let marks = [40, 38, 80]

for (i of marks) {
    total += i
}

let averageMarks = average(total)
console.log(averageMarks)

