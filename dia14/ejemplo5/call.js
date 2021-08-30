"use strict";

//ejemplo de callback


//se inserta la etiqueta <script src=...>
//callback es la funcion como parametro
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);//ejecución del callback
  document.head.append(script);
};

//con manejo de errores
function loadScript2(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null,script);
  script.onerror = () => callback(new Error("el script: "+src+" no se pudo cargar"));
  document.head.append(script);
};


loadScript('call1.js',()=>{saludo();});
/*
//con errores
loadScript2('call1.js',function(error, script){
  if (error){
    console.log("error: "+error);
  }else{
    console.log("funciona");
    saludo();
  }
});
*/
