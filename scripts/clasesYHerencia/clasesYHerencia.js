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
    }

    sonar(){
        console.log('Soy un Perro y mi sonido es un ladrido.')
    }

    ladrar(){
        console.log('Guau Guau');
    }

}

const gru = new Perro('Gru', 'Macho', 'Enano');
const lola = new Animal('lola', 'Hembra');

console.log(gru);
gru.saludar();
gru.sonar();

console.log(lola);
lola.saludar();
lola.sonar();
