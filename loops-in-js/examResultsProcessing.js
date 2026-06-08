let marks = [87, 65, 92, 35, 56, 12, 99, 71, 26, 39];

let passCount = 0;
let failCount = 0;
let highestMark = 0;
let lowestMark = 100;

for (let j = 0; j < marks.length; j++) {

  if (marks[j] >= 35) {
    passCount++;
  } else {
    failCount++;
  }

  if (marks[j] > highestMark) {
    highestMark = marks[j];
  }

  if (marks[j] < lowestMark) {
    lowestMark = marks[j];
  }
}

console.log(passCount);
console.log(failCount);
console.log(highestMark);
console.log(lowestMark);
