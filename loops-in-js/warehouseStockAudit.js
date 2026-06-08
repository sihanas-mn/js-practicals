products = {
  phone: 50,
  TV: 60,
  laptops: 40,
  watches: 15,
};

let totalQuantity = 0;

for (let [key, value] of Object.entries(products)) {
  console.log(key, value);

  if (value < 20) {
    console.log(`low stock product: ${key} & quantity: ${value}`);
  }

  totalQuantity += value;
}

console.log(`total quantity of all products: ${totalQuantity}`);
