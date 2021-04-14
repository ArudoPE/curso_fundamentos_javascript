//Esta es la función constructora
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
}
//Aquí creamos un nuevo objeto con el prototipo de "persona",
//la cual es una función constructora
var sacha = new Persona('Sacha', 'Lifszyc', 1.9);
var erika = new Persona('Erika', 'Luna', 1.6);
var arturo = new Persona('Arturo', 'Martinez', 1.8);
sacha.saludar();
erika.saludar();
arturo.saludar();
//Aquí agrego nueva función al prototype de persona llamada "esAlto"
Persona.prototype.esAlto = function() {
    if(this.altura > 1.8){
        console.log(`Me llamo ${this.nombre}, y mido más de 1.8mt.`);
    }
    else {
        console.log(`Me llamo ${this.nombre}, y mido menos de 1.8mt.`);
    }
}
sacha.esAlto();
erika.esAlto();
arturo.esAlto();