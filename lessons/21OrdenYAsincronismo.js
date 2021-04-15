const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id/';
const YodaUrl = `${API_URL}${PEOPLE_URL.replace(':id',20)}`;
const opts = {crossDomain: true};

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    //onePeopleResponse es un CALLBACK
    $.get(url, opts, function (person) {
        console.log(`${id}.Hola yo soy ${person.name}.`);
    });
    if(callback) {
        callback();
    }
}
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3);
    });
});

//Otra manera de hacerlo con Vanilla JS
function traerDatos(id){
    var objetoRequest = new XMLHttpRequest;
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    objetoRequest.open('GET', url, true);
    objetoRequest.send();
    objetoRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var personaje = JSON.parse(this.responseText);
            //console.log(typeof(personaje));
            console.log(`${id}.Hola yo soy ${personaje.name}, llamado(a) por Vanilla JS.`);
        }
    }
}
//Aquí hago un ciclo para llamar a la función 3 veces con
//los personajes 20, 21 y 22.
for (let i = 20; i < 23 ; i++)
{
    traerDatos(i);
}
