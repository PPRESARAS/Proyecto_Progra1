var queryString = location.search;
var searchParams = new URLSearchParams(queryString);
var search = searchParams.get("search");

var url = "https://api.themoviedb.org/3/search/tv?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&query="+ search +"&page=1";


var destinoh1 = document.querySelector(".textobuscado");
var texto = '<h1>'+"Resultados para: "+ search +'</h1>'
  destinoh1.innerHTML += texto

var destinoprecarga = document.querySelector(".search");
destinoprecarga.value = search



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





    if(datos.results[i].poster_path == null){
      var lifallo = ""
      lifallo += "<li class='unidad uk-transition-toggle'>"
      lifallo += '<img class="poster uk-transition-scale-up" src="../imagenes/mati.jpg" alt=""</a>'
      lifallo += '<div class="contenedortitulo uk-transition-scale-up"> <a href="detalles.html?id='+datos.results[i].id+'" class="tituloserie">'+datos.results[i].name+'</a></div>'
      lifallo += "</li>"
      destino.innerHTML += lifallo
    }else{
      var li = ""
      li += "<li class='unidad uk-transition-toggle'>"
      li += '<img class="poster uk-transition-scale-up" src="'+posterURL+ datos.results[i].poster_path+'" alt=""</a>'
      li += '<div class="contenedortitulo uk-transition-scale-up"> <a href="detalles.html?id='+datos.results[i].id+'" class="tituloserie">'+datos.results[i].name+'</a> </div>'
      li += "</li>"
      destino.innerHTML += li
    }

   }


})


//para que cuando busques , si escribis 2 caracteres , arroje error
/*document.querySelector("textobuscado").onsubmit = function (e) {
  var busco =document.buscar.buscador.value;
  console.log(busco);

  if(busco.length <==3) {
    e.preventDefault ()
    UIkit.notification ({message: "Ingrese mas de 3 caracteres", status: 'warning',
  timeout:2000})
} else {

}
  }
}*/
