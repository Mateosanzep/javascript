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

const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};

const diasLetras2 = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

console.log(diasLetras[dia]);
console.table(diasLetras);
