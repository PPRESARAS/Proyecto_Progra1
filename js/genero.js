var queryString = location.search;

var searchParams = new URLSearchParams(queryString)

var id = searchParams.get("id")

var nombre = searchParams.get("nombre")
var elemento2 = document.querySelector ('.tituloDelGenero')
elemento2.innerHTML += '<p class="titulin">Resultados para: '+ nombre+'<p>'
console.log(id);
console.log(nombre);
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
      var elementoHTML = document.querySelector('.listaDeSeries')
      if(myJson.results[i].poster_path == null){
        var lifallo = ""
        lifallo += "<li class='unidad uk-transition-toggle'>"
        lifallo += '<img class="poster uk-transition-scale-up" src="../imagenes/mati.jpg" alt=""</a>'
        lifallo += '<div class="contenedortitulo uk-transition-scale-up"> <a href="detalles.html?id='+datos.results[i].id+'" class="tituloserie">'+datos.results[i].name+'</a></div>'
        lifallo += "</li>"
        destino.innerHTML += lifallo}
        else {

      var contenidoParaInsertar = '<li class="serie uk-transition-toggle">'
      contenidoParaInsertar += '<img class="poster uk-transition-scale-up" src="'+posterURL+ myJson.results[i].poster_path+'" alt="">'
      contenidoParaInsertar += '<div class="tituloserie uk-transition-scale-up"><a class="titulo" href="detalles.html?id='+myJson.results[i].id+'">'+myJson.results[i].name +'</a></div>'
      contenidoParaInsertar += '</li>'
}
      elementoHTML.innerHTML += contenidoParaInsertar



}
    })
