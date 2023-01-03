const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 pesos" : "10 pesos");

console.log(elMayor(10, 15));
console.log(tieneMembresia(false));

const amigo = true;
const amigoArr = ["petter", "tony", "mateo", amigo ? "jose" : "pepe"];

console.log(amigoArr);

const nota = 91;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : "F";

console.log({ nota, grado });
