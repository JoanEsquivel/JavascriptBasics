function sumar (a, b, ...c) {

    let resultado = a + b;

    //C es opcional y solo va a funcionar si se pasa algun parametro.
    c.forEach(function (n) {
        resultado += n;
    });

    return resultado;

}

console.log(`Suma con A y B(1 y 2), no hay errores si no se mandan mas parametros: ${sumar(1,2)}`);
console.log(`Suma con mas parametros 1 + 2 + 3 + 4: ${sumar(1,2,3,4)}`);