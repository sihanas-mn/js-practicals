let marks = [50, 56, 85, 40, 35, 20, 32, 92, 61, 73]
let totalMarks =  0
let averageMarks = 0
let passCount = 0

for (i = 0; i < 10; i++) {
    totalMarks = totalMarks + marks[i]
    averageMarks = totalMarks / marks.length
    if (marks[i] >= 35) {
        passCount++
    }
}

console.log(`Total Mark: ${totalMarks}`)
console.log(`Average Mark: ${averageMarks}`)
console.log(`Pass Count: ${passCount}`)