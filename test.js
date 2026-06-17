function num1() {
  return 1;
}

function add(a, b) {
    console.log(a + b())
}

add(3, num1)