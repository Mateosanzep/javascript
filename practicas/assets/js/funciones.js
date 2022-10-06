function saludar() {
  console.log("hola");
}
saludar();

const saludar2 = function () {
  confirm.log("hola");
};

function saludar3(nombre) {
  console.log("hola " + nombre);
}
saludar("mateo");

function saludar4(nombre2) {
  console.log(arguments);
  console.log("hola" + nombre2);
}
saludar4("mateo", 40, true);

const saludarFlecha = () => {
  console.log("hola flecha");
};
saludarFlecha();

function saludarret() {
  console.log("holaret");
  return 1;
}
console.log(saludarret());

function sumar1(a, b) {
  return a + b;
}
console.log(sumar1(1, 2));

const sumar2 = (a, b) => {
  return a + b;
};
console.log(sumar2(2, 2));

const sumar3 = (a, b) => a + b;

console.log(sumar3(2, 3));

// function getAlatorio(){
//   return Math.random();
// }
// console.log(getAlatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
