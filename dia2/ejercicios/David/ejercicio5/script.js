"use strict";

let montoHora = 30;

let horas = 0;

function calcularHoras() {
    horas = 24;

    let sueldo = (30*24);

    document.getElementById("pago").innerHTML = "El pago por 24 horas es: "+sueldo;
}
window.onload = calcularHoras;