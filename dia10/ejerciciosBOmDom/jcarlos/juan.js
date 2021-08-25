var dato;

dato=prompt('Ingrese un numero:','');


if(dato % 2 == 0) {
    window.onload=function(){
        document.body.style.background="red";
        setTimeout(() => document.body.style.background = "", 1000);
        }
} else {
    window.onload=function(){
        document.body.style.background="blue";
        setTimeout(() => document.body.style.background = "", 1000);
        }
}