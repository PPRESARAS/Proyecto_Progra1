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
  if (selectIncluir.selectedIndex == 0) {
    UIkit.notification('[ERROR] Debes elegir un genero a buscar!', {status:"danger"});
  }
}
