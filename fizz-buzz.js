// Primero tengo que crear una lista del 1 al 100
for (let n = 1; n <= 100; n++) {
    if (Number.isInteger(n / 3) && Number.isInteger(n / 5)) {
        console.log("fizz-buzz");
        continue;
      }
    if (Number.isInteger(n / 3)) {
        console.log("fizz");
        continue;
    }
    if (Number.isInteger(n / 5)) {
        console.log("buzz");
        continue;
    }
  console.log(n);
}


