//step 1: defining variables

let studentName = "Ahshan";
let age = 22;
let course = "Full Stack Develepment";

let courseFee = 50000;
let booksFee = 5000;
let hostelFee = 10000;

let discount = 5000;

let paidAmount = 30000;

let marks = 78;

let isPaid = false;
let hasScholarship = true;

let attendance = 85;

let bonusMarks = 5;

let loginCount = 0;

let teacher = null;

let project = {
  title: "POS System",
  frontend: {
    framework: "React",
  },
};

//step 2: arithmetic operators//

//calculate total fee
let totalFee = courseFee + booksFee + hostelFee;
console.log("total fee: " + totalFee);

//subtract discount fee
let afterDiscountFee = totalFee - discount;
console.log("after discount fee: " + afterDiscountFee);

//calculate remaining balance
let remainingBalance = afterDiscountFee - paidAmount;
console.log("remaining balance: " + remainingBalance);

//dividing fee into 6 monthly installments
let installmentPerMonth = afterDiscountFee / 6;
console.log("installment per month: " + installmentPerMonth);

//mudulus of fee
let modulusOfFee = afterDiscountFee % 6;
console.log("modulus of fee: " + modulusOfFee);

//square of bonus marks
let squareOfBonusMarks = bonusMarks * bonusMarks;
console.log("square of bonus marks: " + squareOfBonusMarks);

//step 3: assignment operators

//step 4: comparison operators

//comaparing age
let isAdult = age >= 18;
console.log("is adult: " + isAdult);

//comparing marks
let isPass = marks >= 32;
console.log("is pass: " + isPass);

//comparing balance and course fee
let balanceandcourse = remainingBalance == courseFee;
console.log("is balance and course fee are same: " + balanceandcourse);

//step 5: logical operators

//exam eligibility
let examEligibility;

if (isPaid && attendance >= 80) {
  examEligibility = true;
} else {
  examEligibility = false;
}

console.log("eligible for exam: " + examEligibility);

//scholarship eligibility
let scholarshipEligibility;

if (hasScholarship || marks + bonusMarks >= 80) {
  scholarshipEligibility = true;
} else {
  scholarshipEligibility = false;
}

console.log("scholarship eligibility: " + scholarshipEligibility)

//reverse payment status
let reversePaymentStatus =! isPaid
console.log("reverse payment status: " + reversePaymentStatus)


//step 6: increment and decrement

//increase and decrease login count
loginCount = ++loginCount
console.log("incremented login count: " + loginCount)

loginCount = --loginCount
console.log("decremented login count: " + loginCount)


//step 7: string operator
let studentAndCourse = studentName + course
console.log(studentAndCourse)

//step 8: ternary operator
let passfail = marks >= 40 ? "pass" : "No"
console.log(passfail)

//step 9: type operators
console.log(typeof(marks))
console.log(typeof(studentName))


//step 10: nullish coalescing
let lecturer1 = "sergio"
let lecturer2 = "amanda"
let lecturer3;
let teacherWho = lecturer2 ?? lecturer1 ?? lecturer3

console.log(teacherWho)

//step 11: optional chaining
let backend = project.backendTech?.backend
console.log(backend)

//step 12: bitwise operators
console.log(5 & 10)
console.log(5 | 10)
console.log(5 ^ 10)
console.log(~5)
console.log(5 << 1)
console.log(5 >> 1)

//final challenge

//defining grades
let grade
let finalMarks = marks + bonusMarks
if (finalMarks >= 80) {
  grade = "A"
} else if (finalMarks >= 60) {
  grade = "B"
} else if (finalMarks >= 40) {
  grade = "C"
} else {
  grade = "F"
}

console.log("Student Details below: ")

console.log(`student name: ${studentName}. age: ${age}. selected course: ${course}`)
console.log( `total fee: ${totalFee}`)
console.log(`balance: ${remainingBalance}`)
console.log(`results: ${marks + bonusMarks}`)
console.log(`grade: ${grade}`)
console.log(`scholarship eligibility: ${scholarshipEligibility}`)
console.log(`exam eligility: ${examEligibility}`)
console.log(`teacher status: ${teacherWho}`)