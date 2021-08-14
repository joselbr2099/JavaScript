"use strict";
let i = 0;
let result;

while (true) {

    result = prompt("ventana", "Ingrese un nombre: ");//"ventana" mensaje que se vera en el prompt para la variable result
    if (result == "STOP") {
        break;
    }
    if (result == "stop") {
        break;
    }
}

document.getElementById("resultado").innerHTML = result;
