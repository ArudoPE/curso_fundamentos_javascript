const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id/';
const opts = {crossDomain: true};

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}
function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}
obtenerPersonaje(1)
.then(function (personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
})
.catch(onError);

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
