"use strict";

let primerNum = prompt("Ingrese un Numero", "1");
let segundoNum = prompt("Ingrese Otro", "1");

function numeroMayor() {
    if (primerNum > segundoNum) {
        console.log(primerNum + " es el mayor");
        document.getElementById("mayor").innerHTML = "El numero mayor es: " + primerNum;
    } else {
        console.log(segundoNum + " es el mayor");
        document.getElementById("mayor").innerHTML = "El numero mayor es: " + segundoNum;
    }
}

window.onload = numeroMayor;