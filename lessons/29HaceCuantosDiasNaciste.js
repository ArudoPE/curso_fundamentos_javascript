function diasEntreFechas(fecha1, fecha2) {
    //Math.abs vuelve positivo el resultado
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2);
    //Math.floor redondea hacia abajo
    return Math.floor(diferencia / unDia);
}
const hoy = new Date();
//Para pasar parámetros de fecha, pasamos: año, mes (de 0 al 11)
//y por último día
const nacimiento = new Date(1988,2,11);


//Otra manera de sacar fechas
var date = new Date();
var dateNow = {
	anio: date.getFullYear(),
    //getMonth retorna el mes comenzando en 0 con Enero, por
    //eso le puse +1, para que inicie como Enero = 1.
	mes: date.getMonth() + 1,
	dia: date.getDate()
};

console.log(`Hoy es: ${dateNow.dia}-${dateNow.mes}-${dateNow.anio}`);