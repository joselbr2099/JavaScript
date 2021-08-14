let iteraciones = prompt("Iterar numeros pares", "0");

let numPar = 0;

for (let i = 0; i < iteraciones; i++) {
    if (numPar%2 == 0) {
        console.log(numPar)
        numPar = numPar + 2;
    }
    // console.log("hola");
}
