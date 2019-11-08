var queryString = location.search;
// capturamos la queryString del navegador , la variable guarda lo que dice el buscadorheader
var searchParams= new URLSearchParams(queryString) // captura las diferentes partes del searchbar en este caso pido que me busque algo del location

var id = searchParams.get ("id")
//de todas las partes que agarro agarra el id

var url= "https://api.themoviedb.org/3/tv/"+ id+ "?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson){
  var posterURL = 'https://image.tmdb.org/t/p/original'
    console.log(myJson);
      console.log(  myJson.name  )
      console.log(  posterURL+myJson.poster_path)
      var elementoHTML = document.querySelector('.detalles')

      var contenidoParaInsertar = '<li>'
      contenidoParaInsertar += '<img src="'+posterURL+ myJson.poster_path+'" alt="">'
      contenidoParaInsertar += '<div class="uk-position-center uk-panel"><h1>'+myJson.name +'</h1></div>'
      contenidoParaInsertar += "<p> " +myJson.overview +" </p>"
        contenidoParaInsertar += "<p> " +myJson.original_lenguage+" </p>"
        contenidoParaInsertar += "<p> " +myJson.first_air_date+" </p>"

      var genero = ""
      for (var i = 0; i < myJson.genres.length; i++) {
        myJson.genres[i]
        genero += '     <a href="genero.html" id="generos">'+myJson.genres[i].name+'</a>'
      }
      contenidoParaInsertar+= genero
      contenidoParaInsertar += '</li>'

      elementoHTML.innerHTML += contenidoParaInsertar

  });



  var queryString = location.search;
  // capturamos la queryString del navegador , la variable guarda lo que dice el buscadorheader
  var searchParams= new URLSearchParams(queryString) // captura las diferentes partes del searchbar en este caso pido que me busque algo del location

  var id = searchParams.get ("id")


  var url= "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson.results[0].key);

      var elementoHTML = document.querySelector('.detalles')

      var contenidoParaInsertar = '<li>'
      contenidoParaInsertar +=  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+myJson.results[0].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>'
  contenidoParaInsertar += '</li>'
          elementoHTML.innerHTML += contenidoParaInsertar
      })
