let verdadero = true;
let falso = false;

//Con constructor, no recomendado.
//v = Boolean(true);

console.log(`Variable con valor verdadero: ${verdadero}`);
console.log(`Variable con valor falso: ${falso}`);

//Truthy & Falsy: Valores que tienden a verdadero o falso.
//https://www.sitepoint.com/javascript-truthy-falsy/

console.log(`Numero 0 tiende a: ${Boolean(0)}`);
console.log(`Numero negativo(-) tiende a: ${Boolean(-2)}`); 
console.log(`Cadena de texto vacia("") tiende a : ${Boolean("")}`); 
console.log(`Cadena de texto vacia(" ") tiende a : ${Boolean(" ")}`); 
console.log(`Cadena de texto vacia(" ") tiende a : ${Boolean(" ")}`); 
console.log(`Un Objeto tiende a : ${Boolean({})}`); 
console.log(`Un Array tiende a : ${Boolean([])}`); 
//null is a special value meaning "no value". null is a special object because typeof null returns 'object'. 
//On the other hand, undefined means that the variable has not been declared, or has not been given a value.
console.log(`El tipo de dato null tiende a : ${Boolean(null)}`); 
console.log(`El tipo de dato undefined : ${Boolean(undefined)}`); 
console.log(`Not a number or NaN tiende a: ${Boolean(NaN)}`)