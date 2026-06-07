let deliveryStatus = false;
let deliveryStatusFromUser;

while (deliveryStatus == false) {
  deliveryStatusFromUser = prompt(`has your product arrived yet? (yes / no): `);

  while (deliveryStatusFromUser !== "yes" && deliveryStatusFromUser !== "no") {
    console.log(`invalid input!`);
    deliveryStatusFromUser = prompt(
      `has your product arrived yet? (yes / no): `,
    );
  }

  if (deliveryStatusFromUser === "yes" || deliveryStatusFromUser === "no") {
    if (deliveryStatusFromUser === "yes") {
      deliveryStatus = true;
    } else {
      deliveryStatus = false;
      console.log(`delivery in progress, wait till you recieve!`)
    }
  }
}

if (deliveryStatus == true) {
  console.log(`your product delivered!`);
}
