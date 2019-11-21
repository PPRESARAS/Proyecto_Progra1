var queryString = location.search;
// capturamos la queryString del navegador , la variable guarda lo que dice el buscadorheader
var searchParams= new URLSearchParams(queryString) // captura las diferentes partes del searchbar en este caso pido que me busque algo del location

var id = searchParams.get ("id")
//de todas las partes que agarro agarra el id

var urlSerie= "https://api.themoviedb.org/3/tv/"+ id+ "?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

fetch(urlSerie)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson){
    var posterURL = 'https://image.tmdb.org/t/p/original'

    console.log(myJson);
    console.log( myJson.original_language)

    var poster = document.querySelector('.imagenPeli');
    poster.src = posterURL + myJson.poster_path;

    var title = document.querySelector('.title');
    title.innerText = myJson.original_name;

    var lenguaje = document.querySelector('.lenguaje')
    lenguaje.innerHTML += myJson.original_language

    var overview = document.querySelector ('.overview')
    overview.innerHTML += myJson.overview

    var generos = document.querySelector('.generos');
    for (var i = 0; i < myJson.genres.length; i++) {
      generos.innerHTML += '<a href="genero.html?id='+myJson.genres[i].id+'&nombre='+myJson.genres[i].name+'& id="generos" class="genero">'+myJson.genres[i].name+'</a>' + ' '
    }


  });



  var urlTrailer= "https://api.themoviedb.org/3/tv/"+id+"/videos?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US"

  fetch(urlTrailer)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      console.log(myJson.results[0].key);

      var elementoHTML = document.querySelector('.trailer')
          var contenidoParaInsertar = '<p uk-margin> <a class="uk-button uk-button-default botonbueno" href="#modal-media'
          contenidoParaInsertar += '-youtube" uk-toggle>Ver Trailer</a> </p>'
          contenidoParaInsertar += '<div id="modal-media-youtube" class="uk-flex-top" uk-modal>'
          contenidoParaInsertar += '<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">'
          contenidoParaInsertar += '<button class="uk-modal-close-outside" type="button" uk-close></button>'
          contenidoParaInsertar +=  ' <iframe src="https://www.youtube-nocookie.com/embed/'+myJson.results[0].key+'" width="720" height="720" frameborder="0" uk-video></iframe> </div> </div>'

          elementoHTML.innerHTML += contenidoParaInsertar
      })
/*<iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA" width="1920" height="1080" frameborder="0" uk-video></iframe>*/
  /*var contenidoParaInsertar =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+myJson.results[0].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  class="trailer"> </iframe>'*/








  var relacionadas =(" https://api.themoviedb.org/3/tv/"+id+"/recommendations?api_key=8eaabce657eccc6be932f97172c1a728&language=en-US&page=1")

  fetch(relacionadas)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var poster = 'https://image.tmdb.org/t/p/original'
      console.log(myJson);



          for (var i = 0; i < myJson.results.length; i++){
            var sarasa = poster + myJson.results[i].poster_path;
            var posters = document.querySelector('.relacion');

            var agregar = ''
            agregar = '<li class="relacionSerie uk-transition-toggle">'
            agregar += '<img class="poster uk-transition-scale-up" src="'+ sarasa+'" alt="">'
            agregar +='<a href="detalles.html?id='+ myJson.results[i].id+'" class="link uk-transition-scale-up">'+myJson.results[i].name +'</a>'
            agregar += '</li>'

            console.log(agregar, i);
            posters.innerHTML +=  agregar

          }




    });


  var recom = document.querySelector(".relacionadas");
var btn = document.querySelector(".botonchoto");
btn.onclick = function (){
 recom.classList.toggle('show')
}










//
//       (\__/)
//    ⠀  (•ㅅ•)     los profes arreglando
//  　＿ノ ヽ ノ＼  __   el js
//  /　`/ ⌒Ｙ⌒ Ｙ　ヽ
// ( 　(三ヽ人　 /　　|
// |　ﾉ⌒＼ ￣￣ヽ　 ノ   
// ヽ＿＿＿＞､＿＿_／
// 　　 ｜( 王 )〈    (\__/)
//  　　/ ﾐ ー 彡\    (•ㅅ•)  yo
