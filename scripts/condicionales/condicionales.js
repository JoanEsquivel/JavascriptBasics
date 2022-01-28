let edad = 17;

if(edad > 17){
    console.log("Soy Mayor De Edad!")
}else{
    console.log("Soy Menor de edad...")
}

//Operador Ternario

const esMayorDeEdad = (edad > 17) ? "Soy Mayor De Edad":"Soy Menor De Edad.";
console.log("Desde operador ternario -> " + esMayorDeEdad); 


let personaID = 1;

switch(personaID){
    case 0:
        console.log("Soy Mau");
        break;
    case 1: 
        console.log("Soy Paulo");
        break;
    
}