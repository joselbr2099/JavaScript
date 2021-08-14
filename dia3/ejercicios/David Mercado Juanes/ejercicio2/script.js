let numA = prompt("Ingreso el primer numero", "0");
let numB = prompt("Ingreso el segundo numero", "0");
let numC = prompt("Ingreso el tercer numero", "0");

function comparar() {
    if (numA > numB && numA > numC) {
        console.log("El numero mayor es: " + numA);
    } else if (numB > numC) {
        console.log("El numero mayor es: " + numB);
    } else {
        console.log("El numero mayor es: " + numC);
    }
}

window.onload = comparar;