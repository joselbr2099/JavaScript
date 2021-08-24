"use strict";


// let valor = false;


let result = prompt("ventana", "INGRESAR NUMERO");

if(result%2==0)
{

    window.onload=function(){
        //para cambiar el fondo de la pagina
        document.body.style.background="yellow";
        
        // regresa a su color original despues de 1 segundo
        setTimeout(() => document.body.style.background = "YELLOW", 3000);
        }

}else
    {
        window.onload=function(){
            //para cambiar el fondo de la pagina
            document.body.style.background="BLUE";
            
            // regresa a su color original despues de 1 segundo
            setTimeout(() => document.body.style.background = "BLUE", 1000);
            }

          
    
    
        }