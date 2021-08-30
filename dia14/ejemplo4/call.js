"use strict";

//ejemplo de callback
function readString(str,callback){
  let count=0;
  for(let caracter of str){
    if(caracter=='a'){
      count++;
    }
    callback(caracter);
  }
}

//se modifica el comportamiento de la function
//ejecucion sincrona
readString("jose", ()=>{});
readString("jose",alert);

readString("jose", (x)=>{
  console.log(x);
});

readString("jose", function(x){
  if(x=='o'){
    console.log("existe el caracter o");
  }
})

