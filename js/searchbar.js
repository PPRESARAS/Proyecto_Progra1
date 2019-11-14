var queryString = location.search;
var searchParams = new URLSearchParams(queryString);
var search = searchParams.get("search");

var url = "https://api.themoviedb.org/3/search/tv?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&query="+ search +"&page=1";


fetch(url)
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
    for(var i=0; i<datos.results.length; i++){
    datos.results[i]
    var destino = document.querySelector(".resultados");
    var li = ""
    li += "<li>"
    li += datos.results[i].name
    li += "</li>"
   }

  destino.innerHTML = li
})
