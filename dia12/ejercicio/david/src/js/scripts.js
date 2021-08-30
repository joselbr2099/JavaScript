function comparar(){
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;

    if (primerNumero > segundoNumero) {
        document.getElementById("resultado").innerHTML = primerNumero;
    } else {
        document.getElementById("resultado").innerHTML = segundoNumero;
				console.log("")
    }
}

document.getElementById('form').addEventListener('submit', comparar);
