var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while(!llueve())

if(contador===1) {
    console.log(`Fui a ver si llovía ${contador} vez.`)
} else {
    console.log(`Fui a ver si llovía ${contador} veces.`)
}

//var verdad = 0;
//var falso = 0;
// for (let i=0; i<100; i++) {
//     if(llueve()) {
//         verdad++;
//     } else if(!llueve()) {
//         falso++;
//     }
// }
// console.log(`Resultado: ${verdad} veces falso, ${falso} veces verdadero.`);