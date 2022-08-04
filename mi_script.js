document.addEventListener("DOMContentLoaded", function () {
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
  let numEnlaces = Array.from(document.getElementsByTagName("a"));
  /* alert("asd" + (numEnlaces.length+1)) */
  function aTexto(transformar) {
    return document.createTextNode(transformar);
  }
  let info = document.getElementById("info")
  
  function addBr() {
    let brElement = document.createElement("br");
    info.appendChild(brElement)
  }

  /* var enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = "+(enlaces.length+1); */

  function mostrarNumEnlacesEnInfo() {
    let transformar = "Enlaces en pagina: " + (numEnlaces.length) ;
    info.appendChild(aTexto(transformar));
    addBr();
  }
  mostrarNumEnlacesEnInfo();

  // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

  /* var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
  info.innerHTML = info.innerHTML + "<br/>" + mensaje; */

  function penultimoEnlace(){
    let enlace = "El penultimo enlace es: " + (numEnlaces.at(-2));
    info.appendChild(aTexto(enlace));
    addBr();
  }
  penultimoEnlace();
  

  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
  let linksPrueba = numEnlaces.filter(aPrueba).length;
  function aPrueba(enlace){
    return enlace.href === "http://prueba/"
  }
  info.appendChild(aTexto(`Enlaces a Prueba: ${linksPrueba}`))
  addBr();

  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

  let parrafos = document.getElementsByTagName("p");
  let enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");
  info.appendChild(aTexto(`El tercer parrafo tiene: ${enlacesTercerParrafo.length} enlaces`));

});


/* node list - htmlcolection - array  */
