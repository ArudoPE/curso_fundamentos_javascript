//1st Lesson
var sacha = {
    nombre: 'Sasha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
};

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
};

function printProfessions(person) {
    console.log(`${person.nombre} es:`);
    if(person.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }
    if(person.cocinero) {
        console.log('Cocinero');
    }
    if(person.cantante) {
        console.log('Cantante');
    }
    if(person.dj) {
        console.log('Dj');
    }
    if(person.guitarrista) {
        console.log('Guitarrista');
    }
    if(person.drone) {
        console.log('Piloto de Drone');
    }
}
printProfessions(sacha);
//2nd Lesson

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(person) {
    return person.edad >= MAYORIA_DE_EDAD;
}

function printAdult(person) {
    if (esMayorDeEdad(person)) {
        console.log(`${person.nombre} is an adult.`);
    } else {
        console.log(`${person.nombre} is under-age.`);
    }
}
printAdult(sacha);
printAdult(juan);