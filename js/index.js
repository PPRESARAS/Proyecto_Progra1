// var busquedaPersona =  xxxx;
// var url = "https://api.themoviedb.org/3/search/movie?api_key=8eaabce657eccc6be932f97172c1a728&query="+busquedaPersona+"&page=1&include_adult=true"

var apikey= "8eaabce657eccc6be932f97172c1a728"

fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })  // el fetch me trae la data en formato objeto (general) con muchos resultados (array)

  // en el segundo den me lo convierte en un objeto que yo puedo utilizar
  .then(function(myJson) {
    var posterURL = 'https://image.tmdb.org/t/p/original'
    console.log(myJson);
    for (var i = 0; i < myJson.results.length; i++) {
      myJson.results[i]
      console.log(  myJson.results[i].name  )
      console.log(  posterURL+myJson.results[i].poster_path)
      var elementoHTML = document.querySelector('.puntaje')

      var contenidoParaInsertar = '<li class="uk-transition-toggle unidad">'
      contenidoParaInsertar += '<img src="'+posterURL+ myJson.results[i].poster_path+'" alt="" class="poster uk-transition-scale-up">'
      contenidoParaInsertar += '<div class="uk-position-center uk-panel contenedora"><a href="detalles.html?id='+ myJson.results[i].id+'" class="link uk-transition-scale-up">'+myJson.results[i].name +'</a></div>'
      contenidoParaInsertar += '</li>'

      elementoHTML.innerHTML += contenidoParaInsertar

      // una vez que me sale el array completo de toda la info , selecciono
      //que es lo que voy a utilizar (en este caso, quiero utilizar los resultados)
      //para utilizar los resultados en el json le pongo .resultados
      //una vez hecho esto utilizo un for para que se me corra el array solo sin tener que poner uno por usando
      // re escribo el json con la variable i para que reccorra el array
      // por ultimo agrego un console log para hacer visible la variable
    }


  });
  fetch('https://api.themoviedb.org/3/tv/popular?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&page=1')
  .then(function(response){
    return response.json();
  })

  .then (function(myJson){
    var posterURL = 'https://image.tmdb.org/t/p/original'
    console.log(myJson);
    for (var i = 0; i < myJson.results.length; i++) {
      myJson.results[i]
      console.log(  myJson.results[i].name )
      console.log(posterURL+myJson.results[i].poster_path);

      var elementoHTML = document.querySelector('.populares')
      var insertar = '<li class="uk-transition-toggle unidad">'
      insertar += '<img src="'+posterURL+ myJson.results[i].poster_path+'" alt="" class="poster uk-transition-scale-up"</a>' //quiero que con cada genero me tire una foto que lo represente
      insertar += '<div class="uk-position-center uk-panel contenedora"> <a href="detalles.html?id='+ myJson.results[i].id+'" class="uk-transition-scale-up">'+myJson.results[i].name +'</a> </div>'
      insertar += '</li>'

      elementoHTML.innerHTML += insertar
   }
  })





  fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&page=1')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var posterURL ='https://image.tmdb.org/t/p/original'
      console.log(myJson);
      for (var i = 0; i < myJson.results.length; i++) {
        myJson.results[i]
        console.log(myJson.results[i].name);
        console.log(posterURL+myJson.results[i].poster_path);

        var elementoHTML = document.querySelector('.aire')
        var insertar2 = '<li class="uk-transition-toggle unidad">'
        insertar2 += '<img src="'+posterURL+ myJson.results[i].poster_path+'" alt="" class="poster uk-transition-scale-up"</a>'
        insertar2 += '<div class="uk-position-center uk-panel contenedora"> <a href="detalles.html?id='+ myJson.results[i].id+'" class="uk-transition-scale-up">'+myJson.results[i].name +'</a></div>'
        insertar2 += '</li>'

        elementoHTML.innerHTML += insertar2
      }
    });
