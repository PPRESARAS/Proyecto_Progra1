var api_key = "8eaabce657eccc6be932f97172c1a728"

fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US")
  .then(function(response){
    return response.json();
  })

  .then (function(myJson){
    console.log(myJson);
    for (var i = 0; i < myJson.results.length; i++) {
      myJson.results[i]
      console.log(  myJson.results[i].name )

      var elementoHTML = document.querySelector('listadoDeSeries')
      var insertar = '<li>'
      insertar += '<h1>'+myJson.results[i].name+'</h1>'
      insertar += '</li>'

      elementoHTML.innerHTML += insertar
   }
  })
