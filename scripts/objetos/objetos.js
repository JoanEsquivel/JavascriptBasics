//Key-Value paired

const miMascota = {
    animal: 'perro',
    nombre: 'Rex',
    apellido: 'Jr',
    edad: 8,
    pasatiempos: ['Correr', 'Dormir', 'Jugar', 'Llorar'],
    castrado: true,
    atributosFisicos: {
        colorPelo: 'Blanco',
        colorOjos: 'Negros',
    },
    ladrar: function(){
        console.log('Guau Guau');
    },

    ladrarNombre: function(){
        console.log(`Mi nombre es: ${this.nombre} y mi apellido es ${this.apellido}`);
    }
};

//Impresion de objeto como tal.
console.log(miMascota);

//Impresion de atributos
console.log(miMascota.animal);
console.log(miMascota.atributosFisicos.colorOjos);
//Ladrar ya es un metodo o comportamiento, por lo que no puede ser llamado como un atributo.
miMascota.ladrar();
miMascota.ladrarNombre();