let numeros = [1,2,3,4];

//sin destructuracion
let numero1 = numeros[0];
let numero2 = numeros[1];
let numero3 = numeros[2];
let numero4 = numeros[3];

console.log(`Sin Destructuracion -> ${numero1}, ${numero2}, ${numero3}, ${numero4}`);

//Con Destructuracion
const [one, two, three, four] = numeros;
console.log(`Con Destructuracion -> ${one}, ${two}, ${three}, ${four}`);

const joan = {
    nombre: 'Joan',
    apellido: 'Esquivel',
    edad: 25
}


//La variable debe llevar el mismo nombre que la propiedad.
let{nombre,apellido,edad} = joan;

console.log(`Mi nombre es ${nombre} Mi apellido es ${apellido} Mi edad es ${edad}`);