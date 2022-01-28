

const saludar = function () {
    console.log("Hola Hola Que TAL! - Funcion Anonima sin arrow function.");
}

saludar();

const saludar2 = () => {
    console.log("Hola Hola Que TAL! - Funcion Anonima con arrow function.");
}

saludar2();

//Cuando solo hay un retorno o 1 linea de instruccion, no necesita llaves.

const saludar3 = () => console.log("Hola Hola Que TAL! - Funcion Anonima con arrow function sin {}.");
saludar3();

//Cuando se recibe un parametro, no ocupa ()
const saludarParametros = nombre => console.log(`Mi nombre es ${nombre}`);
saludarParametros('Joan');

//Tambien funciona como return implicito
const suma = (a,b) => a+b;
console.log(`Retorno de suma implicita -> ${suma(2,2)}`);

//Funcion Arrow function de varias lineas

const funcionVariasLineas = () => {
    console.log('Funcion Varias lineas 1');
    console.log('Funcion Varias lineas 2');
    console.log('Funcion Varias lineas 3');
};

funcionVariasLineas();


//For Each con Arrow Functions
const arrayDeTest = [1,2,3,4,5];

arrayDeTest.forEach((elemento, index) => console.log(`El elemento ${elemento} esta en la posicion ${index}`));

//