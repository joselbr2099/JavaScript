"use strict";


// let valor = false;


let result = prompt("ventana", "Ingrese un numero");

if(result%2==0)
{

    window.onload=function(){
        //para cambiar el fondo de la pagina
        document.body.style.background="red";
        
        // regresa a su color original despues de 1 segundo
        setTimeout(() => document.body.style.background = "", 1000);
        }

}else
    {
        window.onload=function(){
            //para cambiar el fondo de la pagina
            document.body.style.background="blue";
            
            // regresa a su color original despues de 1 segundo
            setTimeout(() => document.body.style.background = "red", 1000);
            }

    }