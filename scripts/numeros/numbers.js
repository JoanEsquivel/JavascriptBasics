let one = 1;
let two = 2;
let threeWithDecimals = 3.18;
let numberString = '2';

console.log(`-> Int Numbers: ${one}, and ${two}`)

//toFixed -> Cantidad de datos numericos que va a tener un numero
console.log(`-> To fixed - 1 number: ${threeWithDecimals.toFixed(1)}`);
console.log(`-> To fixed - 2 numbers: ${threeWithDecimals.toFixed(2)}`);
console.log(`-> To fixed - 2 numbers: ${threeWithDecimals.toFixed(3)}`);

//parseInt -> Convierte un string a numero, pero tambien funciona de numero double a entero puro.
console.log(`-> Parse Int de 'threeWithDecimals: ${parseInt(threeWithDecimals)}`);
console.log(`Type Of 'numberString' before parseInt -> ${typeof(numberString)}: ${numberString}`);
let newNumber = parseInt(numberString);
console.log(`Type Of 'newNumber' after parseInt -> ${typeof(newNumber)}: ${newNumber}`);
console.log('--> Samples:')
console.log(one + two);
console.log(one + threeWithDecimals);
console.log(one + numberString);
console.log(two + newNumber);
