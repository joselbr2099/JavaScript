var dato;

dato=prompt('Ingrese su contraseña:','');


if(dato == "contrasena") {
    location.href="https://youtube.com";
} else {
    window.onload=function(){
        document.body.style.background="blue";
        setTimeout(() => document.body.style.background = "", 1000);
        }
}