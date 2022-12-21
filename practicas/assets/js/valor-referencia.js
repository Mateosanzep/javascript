let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: "juan" };
let ana = { ...juan };
ana.nombre = "ana";
console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "tony";
  return persona;
};

let peter = { nombre: "peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

const frutas = ["manzana", "pera", "piña"];
const otrasFrutas = [...frutas];
//const otrasFrutas = frutas.slice();
otrasFrutas.push("mango");

console.table({ frutas, otrasFrutas });
