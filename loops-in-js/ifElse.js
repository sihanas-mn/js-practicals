//question 1: Student Grade System
let marks = 80;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 50) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

//question 2: Loan Approval System
let age = 22;
let salary = 55000;
let experience = 3;
let civilScore = 800;

if (age >= 21 && age <= 60) {
  if (salary >= 50000) {
    if (experience >= 2) {
      if (civilScore >= 700) {
        console.log("You are eligible to apply for a loan");
      } else {
        console.log("Your Civil score must be at least 700");
      }
    } else {
      console.log("you experience must be at least 2 years");
    }
  } else {
    console.log("you salary must be atleast 50000");
  }
} else {
  console.log("your age must be atleast 21 and below 60");
}

//question 3: E-Commerce Discount System
let isPremiumcustomer = true;
let IsRegulaCustomer = false;
let amount = 10000;
let finalPayableAmount;
let couponAvailability = true;

if (isPremiumcustomer == true) {
  if (amount >= 10000) {
    finalPayableAmount = amount - amount * (20 / 100);
  } else {
    finalPayableAmount = amount - amount * (10 / 100);
  }
} else if (IsRegulaCustomer == true) {
  if (amount >= 10000) {
    finalPayableAmount == amount - amount * (10 / 100);
  } else {
    finalPayableAmount = amount;
  }
} else {
  finalPayableAmount = amount;
}

if (couponAvailability == true) {
  finalPayableAmount = finalPayableAmount - 500;
} else {
  finalPayableAmount = amount;
}

console.log(finalPayableAmount);

//question 4: Employee Bonus Calculation
let yearsOfService = 5;
let rating = "A";
let bonus;

if (yearsOfService >= 5) {
  if (rating == "A") {
    bonus = 30 / 100;
  } else if (rating == "B") {
    bonus = 20 / 100;
  } else {
    bonus = 10 / 100;
  }
} else if (yearsOfService < 5) {
  if (rating == "A") {
    bonus = 15 / 100;
  } else {
    bonus = 5 / 100;
  }
}

console.log(bonus);

// question 5:  Inventory Stock Status
let stock = 10;
let expiryDate = new Date("2026-06-12");
let reOrderLevel = 10;

let ExpiryInMs = expiryDate - Date.now();
let expiryInDays = Math.floor(ExpiryInMs / (1000 * 60 * 60 * 24));

if (stock <= 0) {
  console.log("Out of stock");
} else if (stock <= reOrderLevel) {
  if (expiryInDays <= 30) {
    console.log("low stock & Near expiry");
  } else {
    console.log("stock below reorder level (low stock)");
  }
} else {
  if (expiryInDays <= 30) {
    console.log("in stock & Near expiry");
  } else {
    console.log("stock available");
  }
}
