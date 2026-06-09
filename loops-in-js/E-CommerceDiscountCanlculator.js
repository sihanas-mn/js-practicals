let subTotal;

for (key of Object.keys(goodsNdPrices)) {
  subTotal += goodsNdPrices[key];
}

let goodNdPrices = [
  20,
  35,
  65,
  (grouped = {
    total1: 12,
    total2: 45,
    total3: 20,
  }),
];
