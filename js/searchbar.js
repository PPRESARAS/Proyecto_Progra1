var queryString = location.search;
var searchParams = new URLSearchParams(queryString);
var search = searchParams.get("search");

var url = "https://api.themoviedb.org/3/search/tv?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&query="+ search +"&page=1";


var destinoh1 = document.querySelector(".textobuscado");
var texto = '<h1>'+"Resultados para: "+search +'</h1>'
  destinoh1.innerHTML += texto

var destinoprecarga = document.querySelector(".search");
destinoprecarga.value = search


// var barraborrar = document.querySelector(".form-groupSearch")
// var barraborrada = barraborrar.children;
// var borrada = barraborrada[2]
// barraborrar.removeChild(borrada)


fetch(url)
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    //console.log(datos);
    var posterURL = 'https://image.tmdb.org/t/p/original'
    for(var i=0; i<datos.results.length; i++){
    datos.results[i]
    //console.log(datos.results[i])
    var destino = document.querySelector(".resultados");
    var li = ""
    li += "<li class='unidad'>"
    li += '<img class="poster" src="'+posterURL+ datos.results[i].poster_path+'" alt=""</a>'
    li += '<a href="detalles.html?id='+datos.results[i].id+'" class="tituloserie">'+datos.results[i].name+'</a>'
    li += "</li>"

      destino.innerHTML += li

   }


})
