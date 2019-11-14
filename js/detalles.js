var queryString = location.search;
// capturamos la queryString del navegador , la variable guarda lo que dice el buscadorheader
var searchParams= new URLSearchParams(queryString) // captura las diferentes partes del searchbar en este caso pido que me busque algo del location

var id = searchParams.get ("id")
//de todas las partes que agarro agarra el id

var urlSerie= "https://api.themoviedb.org/3/tv/"+ id+ "?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

fetch(urlSerie)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson){
    var posterURL = 'https://image.tmdb.org/t/p/original'

    console.log(myJson);
    console.log( myJson.original_language)

    var poster = document.querySelector('.poster');
    poster.src = posterURL + myJson.poster_path;

    var title = document.querySelector('.title');
    title.innerText = myJson.original_name;

    var lenguaje = document.querySelector('.lenguaje')
    lenguaje.innerHTML += myJson.original_language

    var overview = document.querySelector ('.overview')
    overview.innerHTML += myJson.overview

    var generos = document.querySelector('.generos');
    for (var i = 0; i < myJson.genres.length; i++) {
      generos.innerHTML += '<a href="genero.html" id="generos" class="genero">'+myJson.genres[i].name+'</a>' + ' '
    }


  });



  var urlTrailer= "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

  fetch(urlTrailer)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson.results[0].key);

      var elementoHTML = document.querySelector('.detalles')

          var contenidoParaInsertar =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+myJson.results[0].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  class="trailer"> </iframe>'
          elementoHTML.innerHTML += contenidoParaInsertar
      })
