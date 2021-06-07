const main = document.getElementById('main');

const contenedor = document.createElement('div');
contenedor.setAttribute('class', 'container row justify-content-lg-center');

main.appendChild(contenedor);

let request = new XMLHttpRequest();
requestURL = 'https://ghibliapi.herokuapp.com/films';
request.open('GET', requestURL,true);
request.send();

var titlespelis = [];

request.onload = function() {
    var peliculas = JSON.parse(this.response)
    if (request.status>=200 && request.status <400) {
        showMovies(peliculas);
    } else {
        const errormensaje = document.createElement('h1');
        errormensaje.textContent ='Se encontró el error ' + request.status
    }
}

function showMovies(JsonObj){
    found = false;
    for(var i =0; i<JsonObj.length; i++){
        titlespelis.push(JsonObj[i].title);
        if(document.getElementById("title").innerHTML == JsonObj[i].title){
            const card = document.createElement('div');
            card.setAttribute('class','card col-6 px-0');

            const titles = document.createElement('div');
            titles.setAttribute('class','titulos card-header');
 
            const h1 = document.createElement('h3');
            h1.setAttribute('class','tituloCard');
            h1.textContent = JsonObj[i].title;

            const h3 = document.createElement('h5');
            h3.setAttribute('class','card-subtitle text-muted');
            h3.textContent = JsonObj[i].original_title;

            const hr = document.createElement('hr');
            
            const p2 = document.createElement('p');
            p2.textContent = JsonObj[i].release_date;

            const cardbody = document.createElement('div');
            cardbody.setAttribute('class','card-body');

            const p1 = document.createElement('p');
            p1.setAttribute('class','card-text');
            p1.textContent = JsonObj[i].description;
            
            contenedor.appendChild(card);
            card.appendChild(titles);
            titles.appendChild(h1);
            titles.appendChild(h3);
            titles.appendChild(hr);
            card.appendChild(cardbody);
            cardbody.appendChild(p2);
            cardbody.appendChild(p1);
            found = true;
        }
    }
    if (found == false){
        const card = document.createElement('div');
        card.setAttribute('class','card');

        const titles = document.createElement('div');
        titles.setAttribute('class','card-title');

        const h1 = document.createElement('h1');
        h1.setAttribute('class','tituloCard');
        h1.textContent = "No existe esta pelicula";

        const h3 = document.createElement('h3');
        h3.setAttribute('class','');
        h3.textContent = "";
        
        const p2 = document.createElement('p');
        p2.textContent = "El titulo podria esta erroneo";

        const cardbody = document.createElement('div');
        cardbody.setAttribute('class','card-body');

        const p1 = document.createElement('p');
        p1.setAttribute('class','card-text');
        p1.textContent = "";
        
        contenedor.appendChild(card);
        card.appendChild(titles);
        titles.appendChild(h1);
        titles.appendChild(h3);
        card.appendChild(cardbody);
        cardbody.appendChild(p2);
        cardbody.appendChild(p1);
    }
        
}

$( "#autocomplete" ).autocomplete({
    source: titlespelis
  });
