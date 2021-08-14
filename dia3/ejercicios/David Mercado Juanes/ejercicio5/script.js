let iteraciones = prompt("Iterar numeros impares", "1");

let numImpar = 1;

for (let i = 0; i < iteraciones; i++) {
    if (numImpar%2 == 1) {
        console.log(numImpar)
        numImpar = numImpar + 2;
    }
    // console.log("hola");
}
