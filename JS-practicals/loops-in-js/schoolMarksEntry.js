let marks = [];
let stopSys = false;
let totalMarks = 0;
let averageMarks = 0;
let passCount = 0;
let newMark;

while (!stopSys) {
  for (let i = 0; !stopSys; i++) {
    newMark = Number(prompt(`enter a new mark of a student: `));

    if (newMark !== "") {
      marks.push(newMark);
    } else {
      console.log(`Enter the values in numbers only!`);
      continue;
    }

    totalMarks = totalMarks + marks[i];
    averageMarks = totalMarks / marks.length;

    if (newMark >= 35) {
      passCount = passCount + 1;
    }

    console.log(`total marks: ${totalMarks}`);
    console.log(`average mark: ${averageMarks}`);
    console.log(`passcount: ${passCount}`);
  }
}
