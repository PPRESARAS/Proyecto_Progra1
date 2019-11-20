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
      var insertar = '<li class="genero uk-transition-toggle">'
      insertar += '<a href="genero.html?id='+myJson.genres[i].id+'&nombre='+myJson.genres[i].name+'" class="generos uk-animation-fade uk-animation-fast uk-transition-scale-up">'+myJson.genres[i].name+'</a>' //quiero que con cada genero me tire una foto que lo represente
      insertar += '</li>'

      elementoHTML.innerHTML += insertar




   }




  })
