let nombre = "David Gonzalo";
let apellidoPat = "Mercado";
let apelldioMat = "Juanes";

function concatenar() {
    document.getElementById("concat").innerHTML = "El nombre completo es: "+nombre+" "+apellidoPat+" "+apelldioMat;
}
window.onload = concatenar;