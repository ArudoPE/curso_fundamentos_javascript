//Esta es la función constructora para una clase en JS
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
    }
}

//Aquí creamos un nuevo objeto con el prototipo de "persona",
//la cual es una función constructora
// var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
// var erika = new Persona('Erika', 'Luna', 1.85);
// var arturo = new Persona('Arturo', 'Martinez', 1.69);
// sacha.saludar();
// erika.saludar();
// arturo.saludar();

// sacha.soyAlto();
// erika.soyAlto();
// arturo.soyAlto();