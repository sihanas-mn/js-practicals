//task 2: ATM cash withdrawal
let balance = 50000;
let userExit = 0;

while (balance > 0 && userExit === 0) {
  withdrawalAmount = prompt("enter the amount you want to withdraw: ");
  if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log(
      `here is your withdrawal amount: ${withdrawalAmount} \n your current balance is: ${balance}`,
    );

    if (balance !== 0) {
      let exitStatus = prompt(
        `do you need another withdrawal? (press letter "s" to continue or press letter "q" to quite) : `,
      );

      while (exitStatus !== "q" && exitStatus !== "s") {
        console.log("please enter a valid command");
        exitStatus = prompt(
          `do you need another withdrawal? (press letter "s" to continue or press letter "q" to quite) : `,
        );
      }

      if (exitStatus == "q") {
        userExit = 1;
        console.log(`thank you for banking with us!`);
      } else {
        userExit = 0;
      }
    } else {
        console.log("thank you for banking with us!")
    }
  } else if (withdrawalAmount > balance) {
    console.log(
      `your withdrwal request is higher than your current balance. your current balance is: ${balance}. `,
    );
  } else {
    console.log(
      `you cannot request a negative value or text for a withdrawal amount! put some brain on!!!`,
    );
  }
}
