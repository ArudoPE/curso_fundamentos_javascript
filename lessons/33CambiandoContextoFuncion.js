const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc'
};
const yesika = {
    nombre: 'Yesika',
    apellido: 'Cortez'
};
function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

//bind sirve para atar el this de ese objeto
//con bind también se puede mandar parámetros, luego
//de poner el objeto como primer parámetro
//bind no ejecuta la función, devuelve una función con ese contexto

// setTimeout(saludar.bind(sacha, 'Hola che'), 1000);

// const saludarASacha = saludar.bind(sacha);
// const saludarAYesika = saludar.bind(yesika);


//call ejecuta la función en ese momento
// saludar.call(sacha, 'Hola che');

//apply es similar al call, es que los parámetros se pasan como array
//es decir, también ejecuta en el momento la función
saludar.apply(sacha, ['Hola che']);