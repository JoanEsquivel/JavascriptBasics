//Operadores

//Aritmeticos
let operacionAritmentica1 = 5 + (5-10) * 3;
let modulo = 5 % 2;

console.log(`Operaciones aritmeticas comunes -> ${operacionAritmentica1}`);
console.log(`Operacion Modulo/Residuo -> ${modulo}`);

//Relacionales

console.log(8 > 9);
console.log(9 > 8);
console.log(9 >= 9);
console.log(8 >= 9);

//Explicacion de iguales: 
// = -> Asignacion
// == -> Comparar Valores
// === -> Compara Valores y Tipo de Dato.

console.log("----- Tipos de IGUAL -----")
console.log(7 == 7);
console.log('7' == 7); //?? Porque? T - F
console.log('7' === 7)

//Incremento y Decremento
let varAIncrementar = 0;
varAIncrementar = varAIncrementar + 1;

console.log('Var a Incrementar: ' + varAIncrementar);

varAIncrementar += 1;
console.log('Var a Incrementar: ' + varAIncrementar);

varAIncrementar++;
console.log('Var a Incrementar: ' + varAIncrementar);

varAIncrementar--;
console.log('Var a Incrementar: ' + varAIncrementar);

//Logicos
// ! Not
// || OR -> Una de las condiciones se cumpla.
// && And -> Todas las condiciones se cumplan o sean verdaderas.

console.log(`--------- Prueba de Operadores Logicos --------------`);
console.log(7===7 || 7 >= 6);
console.log(7===7 && 7 >= 6);
console.log(7===7 && 7 >= 10);
console.log(!true);
 
