//Las funciones en javascript tambien se consideran objetos.
//Puedes asignar como valor y pueden retornar la ejecucion de una funcion adicional

function firstFunction(){
    console.log("Test Function #1");
}

firstFunction();

//Funcion que retorna valor.

function secondFuction(){
    let sum = 2+2;
    return sum;
}

console.log(" Test Function #2 is returing the value " + secondFuction())

//Asignar retorno a una variable
let resultadoSuma = secondFuction();
console.log(" Test Function #2 is returing the value and was assigned to a variable. Result:  " + resultadoSuma);

//Funcion que acepta parametros
function saludar(nombre='Joan', edad=25){
    console.log(`Funcion Saludar: Un saludo a ${nombre} que tiene ${edad} años.`);
}

saludar();
saludar('jeff', 29);

//Funciones declaradas vs Funciones expresadas

//FUNCION DECLARADA: esta funcion puede ser invocada antes de ser declarada. -> Mismo concepto de hoisting de variables antes con var.
funcionDeclarada();

function funcionDeclarada(){
    console.log('Hola Soy Una Funcion Declarada!');
};

//FUNCION EXPRESADA O ANONIMA -> La funcion en si no tiene nombre y el retorno de la misma se le asigna a una variable. Solo puede ser invocada despues de ser declarada.

// funcionExpresada();

const funcionExpresada = function (){
    console.log("Hola Soy Una Funcion Expresada.")
    console.log("NO PUEDE SER INVOCADA ANTES DE SER DECLARADA.")
};

funcionExpresada();
