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
