"use strict";


let result = prompt("ventana", "Ingrese su contraseña");
let contrasenia = 'hola';

if(result==contrasenia)
{

    location.href="https://youtube.com";

}else
    {
        console.log("contraseña incorrecta");
        window.onload=function(){
            //para cambiar el fondo de la pagina
            document.body.style.background="blue";
            
            // regresa a su color original despues de 1 segundo
            setTimeout(() => document.body.style.background = "red", 1000);
            }

    }
