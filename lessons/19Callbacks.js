const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id/';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const C3POUrl = `${API_URL}${PEOPLE_URL.replace(':id',2)}`;
const opts = {crossDomain: true};
const onPeopleResponse = function(person) {
    console.log(`Hola yo soy ${person.name}`);
}
$.get(lukeUrl, opts, onPeopleResponse);

//Otra manera de hacer con Vanilla JS
function traerDatos(){
    var objetoRequest = new XMLHttpRequest;
    objetoRequest.open('GET', C3POUrl, true);
    objetoRequest.send();
    objetoRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var personaje = JSON.parse(this.responseText);
            console.log(typeof(personaje));
            console.log(`Hola yo soy ${personaje.name}`);
        }
    }
}
traerDatos();