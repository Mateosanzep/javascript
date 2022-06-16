

const arr = new Array(10);
const videojuegos = ['fortnite','mariobros'];

let arregloDeCosas = [
    true,
    123,
    'mateo',
    1 + 2,
    ['x','y','z']
];
console.log(arregloDeCosas [4][3]);


let nombres = ['mateo','juan','pepe'];
console.log('largo:',nombres.length);
let primero = nombres[0];
let ultimo = nombres[nombres.length - 1];

nombres.forEach((elemento, indice, arr)=>{
    console.log({elemento,indice, arr});
});

nombres.push('fer');
nombres.unshift('marco');
nombres.pop();
let pos = 1;
nombres.splice(pos, 2);
nombres.indexOf('mateo');
