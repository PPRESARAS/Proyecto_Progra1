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
      incluir.innerHTML += '<option value="generoA" href="genero.html?id='+myJson.genres[i].id+'" >'+myJson.genres[i].name+'</option>'

      excluir.innerHTML += '<option value="generoA" href="genero.html?id='+myJson.genres[i].id+'" >'+myJson.genres[i].name+'</option>'
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

  else if (selectIncluir.selectedIndex !== 0 && selectExcluir.selectedIndex == 0) {
    console.log(selectIncluir.selectedIndex);
  return true;
  }

}
// para el order, hacer url search param, ubicarlo y fetch
var queryString = location.search;

var searchParams = new URLSearchParams(queryString)

var id = searchParams.get("id")

var urlA= "https://api.themoviedb.org/3/discover/tv?"+ id + "api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"

fetch(urlA)
  .then(function(response){
    return response.json();
  })
  .then (function(myJson){
    var 
  })
