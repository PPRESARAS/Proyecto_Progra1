var api_key = "8eaabce657eccc6be932f97172c1a728"

fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US")
  .then(function(response){
    return response.json();
  })

  .then (function(myJson){
    console.log(myJson);
    for (var i = 0; i < myJson.genres.length; i++) {
      myJson.genres[i]
      console.log(  myJson.genres[i].name )

      var elementoHTML = document.querySelector('.listadoDeSeries')
      var insertar = '<select class="genero">'
      insertar += '<option value="generoA" href="genero.html?id='+myJson.genres[i].id+'" class="genero">'+myJson.genres[i].name+'</option>' //quiero que con cada genero me tire una foto que lo represente
      insertar += '</select>'

      elementoHTML.innerHTML += insertar


   }


  })
