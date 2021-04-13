var carlos = {
    nombre: 'Carlos',
    apellido: 'Gonzales',
    edad: 29,
    peso: 76
};
console.log(`A inicio del año ${carlos.nombre} pesa ${carlos.peso}kg.`);

const VARIACION_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (person) => person.peso += VARIACION_PESO;
const adelgazar = (person) => person.peso -= VARIACION_PESO;

for (let i = 1; i <= DIAS_DEL_ANO; i++) {
    let random = Math.random();
    if(random < 0.25) {
        aumentarDePeso(carlos);
    } else if (random < 0.5) {
        adelgazar(carlos);
    }
}
console.log(`Al final del año ${carlos.nombre} pesa ${carlos.peso.toFixed(1)}kg`);

