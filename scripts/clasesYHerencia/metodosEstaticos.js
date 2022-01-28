//No se puede crear una clase privada en JS. No hay modificadores de acceso.
class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
       
    }

    sonar() {
        console.log('Hago sonidos porque estoy vivo.');
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}.`);
    }

}

class Perro extends Animal{

    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log('Soy un Perro y mi sonido es un ladrido.')
    }

    ladrar(){
        console.log('Guau Guau');
    }

    //Metodo estatico -> metodo que no necesita ser instanciado.
    static queSoy(){
        console.log('Mejor Amigo del hombre, soy un perro.');
    }

    //Setters y Getters -> Ejemplo Raza
    //Notar KeyWords y la forma en que se invocan... NO SON FUNCIONES.
    set setRaza(raza){
        this.raza = raza;
    };
    get getRaza(){
        return this.raza;
    };

}

const gru = new Perro('Gru', 'Macho', 'Enano');
const lola = new Animal('lola', 'Hembra');

console.log(gru);
gru.saludar();
gru.sonar();
gru.setRaza ='French Poodle';
console.log('Raza: ' + gru.getRaza);

Perro.queSoy();

console.log(lola);
lola.saludar();
lola.sonar();
