//Esta es la función constructora para una clase en JS
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) {
        // var nombre = this.nombre;
        // var apellido = this.apellido;
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
        if(fn) {
            fn(this.nombre, this.apellido);
        }
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a.`);
        if(fn) {
            fn(this.nombre, this.apellido, true);
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a.`);
    }
}

//Aquí creamos un nuevo objeto con el prototipo de "persona",
//la cual es una función constructora
var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.85);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.69);
sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);

// sacha.soyAlto();
// erika.soyAlto();
// arturo.soyAlto();