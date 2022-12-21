let a = 5;

if (a > 10) {
  console.log("a es mayor a 10");
} else {
  console.log("a es menor a 10");
}

console.log("fin del programa");

const hoy = new Date();
let dia = hoy.getDay();

if (dia === 0) {
  console.log("domingo");
} else if (dia === 1) {
  console.log("lunes");
}
