"use strict";

let numa = 10
let numb = 15
let numc = 20
let numd = 25
let nume = 30

let suma = 0;
let promedioTotal = 0;

function promedio() {
    suma = (numa + numb + numc + numd + nume);

    document.getElementById("suma").innerHTML = "La suma de las notas es: "+suma;

    promedioTotal = (suma/5);

    document.getElementById("promedio").innerHTML = "El promedio de las notas es:"+promedioTotal;
}