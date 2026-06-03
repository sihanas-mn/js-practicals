// question 1: Inventory Management System
let catagory = "food";
let OldStockQuantity = 160;
let lowStockThreshHold = 15;
let OldStockExpiryInDays = 20;
let newStockQuantity = 20;
let NewExpiryInDays = 35;

switch (catagory) {
  case "electronics":
    if (OldStockQuantity <= lowStockThreshHold) {
      console.log(`${catagory} stock is low`);
    } else {
      console.log(`${catagory} in stock`);
    }
    break;

  case "food":
    if (OldStockQuantity >= 1) {
      if (
        OldStockQuantity <= lowStockThreshHold &&
        OldStockExpiryInDays <= 30
      ) {
        console.log(
          `${catagory} low stock & near expiry in ${OldStockExpiryInDays} days stock count: ${OldStockQuantity}| not near expiry stock count: ${newStockQuantity}`,
        );
      } else if (OldStockQuantity <= lowStockThreshHold) {
        console.log(`${catagory} low stock`);
      } else if (OldStockExpiryInDays <= 30 && OldStockExpiryInDays >= 1) {
        console.log(
          `${catagory} in stock & but near expiry in ${OldStockExpiryInDays} days stock count: ${OldStockQuantity} | not near expiry stock count: ${newStockQuantity}`,
        );
      } else if (OldStockExpiryInDays <= 0) {
        console.log(
          `${catagory} in stock but expired stock count: ${OldStockQuantity} | not near expiry stock count: ${newStockQuantity}`,
        );
      } else {
        console.log(`${catagory} in stock`);
      }
    } else {
      console.log(`there is no stock`);
    }
    break;

  case "furniture":
    if (OldStockQuantity <= lowStockThreshHold) {
      console.log(`${catagory} stock is low`);
    } else {
      console.log(`${catagory} in stock`);
    }
    break;
}

// question 2: Student Management System
let role = "student";
let attendance = 60;
let examEligibility;

switch (role) {
  case "admin":
    console.log(`Hello ${role}`);
    break;

  case "teacher":
    console.log(`hello ${role}`);
    break;

  case "student":
    if (attendance <= 70) {
      console.log(`dear ${role}, You aren't eligible to the exam`);
    } else {
      console.log(`dear ${role}, you are eligible to the exam`);
    }
    break;
}

//question 3: E-Commerce Order System
let paymentMethod = "card";
let purchaseAmount = 30000;
let afterDiscountAmount;

switch (paymentMethod) {
  case "cash":
    if (purchaseAmount >= 30000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.15;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else if (purchaseAmount >= 20000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.1;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else {
      console.log(`please pay: ${purchaseAmount}`);
    }
    break;

  case "card":
    if (purchaseAmount >= 30000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.25;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else if (purchaseAmount >= 20000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.2;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else {
      console.log(`please pay: ${purchaseAmount}`);
    }
    break;

  case "online":
    if (purchaseAmount >= 30000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.35;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else if (purchaseAmount >= 20000) {
      afterDiscountAmount = purchaseAmount - purchaseAmount * 0.3;
      console.log(`please pay: ${afterDiscountAmount}`);
    } else {
      console.log(`please pay: ${purchaseAmount}`);
    }
    break;
}

//question 4: Hospital Queue System
let patientType = "emergency";
let age = 50;

switch (patientType) {
  case "emergency":
    if (age <= 2) {
      console.log(`priory: urgent`);
    } else if (age > 2 && age < 60) {
      console.log(`priority: medium`);
    } else {
      console.log(`priority: high`);
    }
    break;

  case "regular":
    if (age <= 30) {
      console.log(`priority: medium`);
    } else {
      console.log(`priority: high`);
    }
    break;
}

//question 5: Banking System
let accountType = "savings";
let balance = 50000;
let FDInterestRate = 0.05;

switch (accountType) {
  case "savings":
    console.log(`Your savings accounts balance: ${balance}`);
    break;

  case "current":
    let afterFDBalance = balance + balance * FDInterestRate;
    console.log(`Your current account balance: ${afterFDBalance}`);
    break;
}

//question 6: Super Market Billing System (Mini Project)
let catagory2 = "grocery";
let amount = 15000;
let amountAfterDiscount;

switch (catagory2) {
  case "grocery":
    if (amount >= 15000) {
      amountAfterDiscount = amount - amount * 0.1;
      console.log(`your bill: ${amount}`);
      console.log(`your discount: ${amount * 0.1}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    } else {
      amountAfterDiscount = amount - amount * 0.05;
      console.log(`your bill: ${amount}`);
      console.log(`your discount: ${amount * 0.05}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    }
    break;

  case "electronics":
    if (amount >= 20000) {
      amountAfterDiscount = amount - amount * 0.11;
      console.log(`your bill: ${amount}`);
      console.log(`your discount: ${amount * 0.11}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    } else {
      amountAfterDiscount = amount - amount * 0.06;
      console.log(`your final bill: ${amount}`);
      console.log(`your discount: ${amount * 0.06}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    }
    break;

  case "clothing":
    if (amount >= 10000) {
      amountAfterDiscount = amount - amount * 0.08;
      console.log(`your final bill: ${amount}`);
      console.log(`your discount: ${amount * 0.08}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    } else {
      amountAfterDiscount = amount - amount * 0.03;
      console.log(`your final bill: ${amount}`);
      console.log(`your discount: ${amount * 0.03}`);
      console.log(`please pay the final of: ${amountAfterDiscount}`);
    }
    break;
}
