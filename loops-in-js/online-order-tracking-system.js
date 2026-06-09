let deliveryList = [
  (iphone = {
    status: "delivered",
    price: "60000",
    quantity: "1",
  }),
  (mouse = {
    status: "pending delivery",
    price: "8000",
    quantity: "3",
  }),
  (laptop = {
    status: "canceled",
    price: "80000",
    quantity: "1",
  }),
];

let userChoice = prompt(`choose a product staus you want to see. your recently added products are (iphone, mouse, laptop): `)

for (i = 0; i < deliveryList.length; i++) {
  let place = deliveryList[i];
  
}
