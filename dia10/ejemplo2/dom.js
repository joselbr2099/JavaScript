"use strict";

window.onload=function(){
//para cambiar el fondo de la pagina
document.body.style.background="red";

// regresa a su color original despues de 1 segundo
setTimeout(() => document.body.style.background = "", 1000);
}
