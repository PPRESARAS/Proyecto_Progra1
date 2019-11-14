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
      incluir.innerHTML += '<option value="generoA" href="genero.html?id='+myJson.genres[i].id+'" class="genero">'+myJson.genres[i].name+'</option>' //quiero que con cada genero me tire una foto que lo represente

      excluir.innerHTML += '<option value="generoA" href="genero.html?id='+myJson.genres[i].id+'" class="genero">'+myJson.genres[i].name+'</option>' //quiero que con cada genero me tire una foto que lo represente
   }


  })

var year = document.querySelector(".year");
var limit = 2020;
for (var i = 1950; i < limit; i++) {
  year.innerHTML += '<option value="'+ i +'" class="genero">'+ i +'</option>'
}
