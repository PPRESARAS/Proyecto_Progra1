function validar(){
   	if (document.formulario.generos.value.length==0){
      		alert("Tienes que elegir un genero!")
      		document.formulario.generos.focus()
      		return 0;
   	}
   	//el formulario se envia//
   	alert("Muchas gracias por enviar el formulario");
   	document.formulario.submit();
}
