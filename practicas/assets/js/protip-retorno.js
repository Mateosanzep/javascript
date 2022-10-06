// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido,
//   };
// }
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Mateo", "Sanchez");
console.log(persona);

const imprimeArgumentos = (edad, ...arguments) => {
  // console.log({edad, arguments});
  return arguments;
};
// const argumentos = imprimeArgumentos(10, true, false, 'Mateo');
// console.log({argumentos})
const [casado, vivo, nombre] = imprimeArgumentos(10, true, false, "Mateo");
console.log({ casado, vivo, nombre });
