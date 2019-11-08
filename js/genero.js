var queryString = location.search;

var searchParams = new URLSearchParams(queryString)

var id = searchParams.get("id")

var url = "https://api.themoviedb.org/3/discover/tv?api_key=8eaabce657eccc6be932f97172c1a728&sort_by=popularity.desc&page=1&with_genres=" + id

fetch(url)
  .then(function(response) {
    return response.json();
  })  // el fetch me trae la data en formato objeto (general) con muchos resultados (array)

  // en el segundo den me lo convierte en un objeto que yo puedo utilizar
  .then(function(myJson) {
    console.log(myJson);
    var posterURL = 'https://image.tmdb.org/t/p/original'
    for (var i = 0; i < myJson.results.length; i++) {
      myJson.results[i]
      var elementoHTML = document.querySelector('.contenedorDeSeries')

      var contenidoParaInsertar = '<div class="serie">'
      contenidoParaInsertar += '<img class="poster" src="'+posterURL+ myJson.results[i].poster_path+'" alt="">'
      contenidoParaInsertar += '<div class="tituloserie"><h1>'+myJson.results[i].name +'</h1></div>'
      contenidoParaInsertar += '</div>'

      elementoHTML.innerHTML += contenidoParaInsertar
}
    })
