//Calcular lado a con senos
function sinLawFora(A, B, b) {
  let ARad = (A * Math.PI) / 180;
  let BRad = (B * Math.PI) / 180;
  return (b * Math.sin(ARad)) / Math.sin(BRad);
}

//Calcular angulo A con senos
function sinLawForA(B, a, b) {
  let BRad = (B * Math.PI) / 180;
  return (Math.asin((Math.sin(BRad) * a) / b) * 180) / Math.PI;
}

//Calcular lado c con cosenos
function cosLawForc(a, b, C) {
  let CRad = (C * Math.PI) / 180;
  return Math.sqrt(
    Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(CRad)
  );
}

//Calcular angulo C con Cosenos
function cosLawFor(a, b, c) {
  return (
    (Math.acos(
      (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)
    ) *
      180) /
    Math.PI
  );
}

console.log(cosLawFor(30, 20, 40));

//Que te pidan los datos en la consola
const readline = require("readline");

function cosLawForC(a, b, c) {
  return (
    (Math.acos(
      (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)
    ) *
      180) /
    Math.PI
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el valor de a: ", (a) => {
  rl.question("Ingrese el valor de b: ", (b) => {
    rl.question("Ingrese el valor de c: ", (c) => {
      console.log(cosLawForC(parseFloat(a), parseFloat(b), parseFloat(c)));
      rl.close();
    });
  });
});
