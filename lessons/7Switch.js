const SIGNO = prompt('¿Cuál es tu signo?');

switch (SIGNO) {
    case 'aries':
        console.log('Tu signo es Aries');
        break;
    case 'tauro':
        console.log('Tu signo es Tauro');
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Tu signo es Cáncer');
        break;
    default:
        console.log(`${SIGNO} no es un signo correcto.`);
}