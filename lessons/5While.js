var carlos = {
    nombre: 'Carlos',
    apellido: 'Gonzales',
    edad: 29,
    peso: 76
};
console.log(`A inicio del año ${carlos.nombre} pesa ${carlos.peso}kg.`);

const VARIACION_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (person) => person.peso += VARIACION_PESO;
const adelgazar = (person) => person.peso -= VARIACION_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = carlos.peso - 3;
var dias = 0;

while (carlos.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(carlos);
    }
    if (realizaDeporte()) {
        adelgazar(carlos);
    }
    dias++;
}

for (let i = 1; i <= DIAS_DEL_ANO; i++) {
    let random = Math.random();
    if(random < 0.25) {
        aumentarDePeso(carlos);
    } else if (random < 0.5) {
        adelgazar(carlos);
    }
}
console.log(`Pasaron ${dias} días, hasta que ${carlos.nombre} adelgazó 3kg.`);

