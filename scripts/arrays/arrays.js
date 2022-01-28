const arregloA = [];
const arregloB = [1, true, 'Hola', [1,2,3,4, ['a','b']]];


console.log(arregloB);

//Lenght
console.log(`Lenght del arreglo B -> ${arregloB.length}`);
//Impresión de un valor dentro de un array
console.log(`Impresion del valor en el arreglo con posicion 2 -> ${arregloB[2]}`);
//Impresión de valor del array valor, que esta en la posicion 3.
console.log(`Impresion de valor del arreglo interno, la posicion 2 -> ${arregloB[3][2]}`);
console.log(`Impresion de valor del arreglo mas interno, la posicion 0-> ${arregloB[3][4][0]}`);

//Nuevas formas de crear arreglos con Ecmascript.
const arrayC = Array.of('A','B','C');
console.log(`Arreglo C -> ${arrayC}`);

console.log(`--> Prueba de constructor Array vs Array of: `);
const arrayOfForm = Array.of(2);
const arrayUsingConstructor = Array(2);

console.log('Creando un Array con Parametro 2 usando ArrayOf-> ' + arrayOfForm + ' - Lenght: ' + arrayOfForm.length);
console.log('Creando un Array con Parametro 2 usando Constructor-> ' + arrayUsingConstructor + ' - Lenght: ' + arrayUsingConstructor.length)


//Fill -> Inicializar todas con cierto valor.
const arregloD = Array(5).fill('test');
console.log(`Array D con valores llenados por Fill -> ${arregloD}`);



//Metodos generalmente usados para modificar un arreglo
const nombres = ['Moni', 'Paulo', 'Mau'];
console.log(`--- Array Inicial para modificar con metodos comunes: -> ${nombres}`);

//Push -> Agrega un elemento al final
nombres.push('Jeff');
console.log(`After Push -> ${nombres}`);
//Pop -> Elimina el ultimo elemento de un array
nombres.pop();
console.log(`After Pop -> ${nombres}`);
//Unshift -> Agrega un elemento al inicio de un array
nombres.unshift('Minor');
console.log(`After Unshift -> ${nombres}`);
//Shift -> Elimina el primer elemento de un array.
nombres.shift();
console.log(`After Shift -> ${nombres}`);
//indexOf -> Encontrar la posicion del elemento de un array.
nombres.push('Jeff');
nombres.unshift('Minor');
console.log(`New Array -> ${nombres}`);
console.log('Index of, looking for Moni -> ' +nombres.indexOf('Moni'));
//splice -> Eliminar un elemento unico*. Se envian dos parametros (posicion, cantidad de elementos a borrar). Para que sea solo 1 en especifico, posicion y 1 para que solo se elimine un elemento.
nombres.splice(2,1);
console.log(`Result after unshift from the position 2, 1 element -> ` + nombres);
//!! splice tambien puede devolver un array de elementos eliminados, y se pueden almacenar en una variable.
console.log(`Resulting Array -> ${nombres}`);
const nombresEliminados = nombres.splice(2,2);

console.log('Restantes Array Nombres -> ' + nombres);
console.log('Nuevo Array de Eliminados-> ' + nombresEliminados);

//Slice -> Copia un array
const copiaNombres = nombres.slice();
console.log('Copia del array usando Slice -> ' + copiaNombres);

//Filter -> Crea un array con todos los elementos que cumplan una condicion
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter(word => word.length > 6);
console.log(`Creacion de arreglo nuevo con los elementos que tuvieran un lenght superior a 6 -> ${results}`);

//Map -> Crea un nuevo array con los resultados de una funcion indicada aplicados a cada uno de sus elementos

const numbersToBeSum = [1,5,10,15];
const numbersAlredySum = numbersToBeSum.map(function (number){
    return number + 2; 
});

console.log(`Numbers + 2 -> ${numbersAlredySum}`)

//Reverse -> invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const reversedArray = numbersToBeSum.reverse();
console.log(`Arreglo invertido -> ${reversedArray}`);

console.log('For Each Example with Numbers to Be sum: ')
//For Each
numbersToBeSum.forEach(function (element, index){
    console.log('ID: '+ index + " - Value: " + element);
});
