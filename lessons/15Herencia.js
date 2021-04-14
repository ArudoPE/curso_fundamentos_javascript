//Esta es la función constructora
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
//No usar arrow functions si vamos a usar this
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
}
//Aquí agrego nueva función al prototype de persona llamada "esAlto"
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8;
}
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(Desarrollador, Persona);
Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
}

//Aquí creamos un nuevo objeto con el prototipo de "persona",
//la cual es una función constructora
var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.85);
var arturo = new Persona('Arturo', 'Martinez', 1.69);
sacha.saludar();
erika.saludar();
arturo.saludar();

sacha.soyAlto();
erika.soyAlto();
arturo.soyAlto();