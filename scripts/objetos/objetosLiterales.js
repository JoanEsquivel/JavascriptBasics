
//No necesita asignarse de nuevo un valor que ya esta declarado.
//Tambien las funciones no necesitan : function.
let nombre = 'Gruu';
let edad = 7;

const miPerro = {
    nombre,
    edad,
    ladrar () {
        console.log('Guau Guau.');
    }
}

console.log(miPerro);
miPerro.ladrar();