let calculateAverage = (mark1, mark2, mark3, callback) => {
  return callback(mark1, mark2, mark3);
};

let averageFun = (a, b, c) => {
  return (a + b + c) / 3
};

let result = calculateAverage(45, 67, 78, averageFun);
console.log(result);
