var api_key = "8eaabce657eccc6be932f97172c1a728"

fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US")
  .then(function(response){
    return response.json();
  })

  .then (function(myJson){
    console.log(myJson);
    var incluir = document.querySelector('.incluir');
    var excluir = document.querySelector('.excluir');
    for (var i = 0; i < myJson.genres.length; i++) {
      incluir.innerHTML += '<option value="'+myJson.genres[i].id+'"  >'+myJson.genres[i].name+'</option>'

      excluir.innerHTML += '<option value="'+myJson.genres[i].id+'">'+myJson.genres[i].name+'</option>'
   }
})

// Campo para elegir el año de la serie que buscas o excluis
var year = document.querySelector(".year");
var limit = 2020;
for (var i = 1950; i < limit; i++) {
  year.innerHTML += '<option value="'+ i +'" class="genero">'+ i +'</option>'
}


// validacion del formulario
var form = document.querySelector(".formulario");
form.onsubmit = function(validar) {
  validar.preventDefault();
  var opciones = form.options;
  console.log(opciones);
  var selectIncluir = document.querySelector(".incluir")
  var selectExcluir = document.querySelector(".excluir")

  if (selectIncluir.selectedIndex == 0 && selectExcluir.selectedIndex == 0){
  UIkit.notification('[ERROR] Debes elegir un genero a buscar!', {status:"danger"})
  }

  else if (selectIncluir.selectedIndex == selectExcluir.selectedIndex) {
  UIkit.notification('[ERROR] No puedes incluir y excluir el mismo genero!', {status:"danger"})
  }

  else if (selectIncluir.selectedIndex == 0 && selectExcluir.selectedIndex !== 0) {
    console.log(selectExcluir.selectedIndex);
  return true;
  }

  else if (selectIncluir.selectedIndex ==0 ) {
    console.log(selectIncluir.selectedIndex);
  return true;
  }
  // else {
  // }

  form.onsubmit = function() {}
}
// para el order, hacer url search param, ubicarlo y fetch

var query = new URLSearchParams(location.search)

// HACERLO CON TODAS LAS COSAS DEL FORM
var generoAIncluir = query.get('generoIncluir')
var generoAExcluir = query.get('generoExcluir')
var ordenarPor = query.get('orden')
var queYear = query.get('year')
if(generoAIncluir == null){
  generoAIncluir == ""
}
if(generoAExcluir == null){
  generoAExcluir == ""
}
if(ordenarPor == null){
  ordenarPor == ""
}
if(queYear == null){
  queYear == ""
}

var urlA= "https://api.themoviedb.org/3/discover/tv?api_key=8eaabce657eccc6be932f97172c1a728&sort_by="+ ordenarPor + "&first_air_date=" + queYear + "&with_genres=" + generoAIncluir + "&without_genres=" + generoAExcluir;

fetch(urlA)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var posterURL = 'https://image.tmdb.org/t/p/original'
    console.log(myJson);
    for (var i = 0; i < myJson.results.length; i++) {
      myJson.results[i]
      console.log(myJson.results[i].name)
      console.log(posterURL+myJson.results[i].poster_path)
      var elementoHTML = document.querySelector('.formulario')

      var busqueda = '<li class="liBuscador uk-transition-toggle">'
      busqueda += '<img class="posterBusqueda uk-transition-scale-up"src="'+ posterURL + myJson.results[i].poster_path+'" alt="">'
      busqueda += '<div class="divaBuscador uk-transition-scale-up"><a class="aBuscador" href="detalles.html?id='+ myJson.results[i].id+'">'+myJson.results[i].name +'</a></div>'
      busqueda += '</li>'

      elementoHTML.innerHTML += busqueda
    }
  });
