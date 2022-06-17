let personaje = {
    nombre: 'mateo',
    codeName: 'ajjusif',
    vivo: false,
    edad: 40,
    coords: {
        lat: 39.209,
        lng: 62.730
    },
    trajes: ['alado','nieve','playero'],
    direccion: {
        zip: 10283,
        ubicacion: 'los angeles',
    },
};

console.log(personaje.nombre);
console.log(personaje['nombre']);
console.log(personaje.trajes.lenght);

const x = 'vivo';
console.log(personaje[x]);

delete personaje.edad;
const entriesPares = Object.entries(personaje);
personaje.casado = true;
Object.freeze(personaje); //se bloquea todo

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);