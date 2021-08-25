"use strict";


let pass=prompt("ingrese la contraseña:","willy123");

if(pass=="willy123"){
    location.href="https://www.youtube.com/watch?v=rl0EZCJcrGc";
}
   else{  
       windows.onload=function()
           {
           document.body.stile.background="red";
           document.getElementId("Bolivia").innerHTML="CONTRASEÑA INCORRECTA";
       }
     
   }