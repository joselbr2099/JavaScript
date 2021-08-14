"use strict";

/*
se utiliza break para romper una estructura
*/

let a=0;
while (a<=3){
  console.log(a);
  ++a;
  if(a==2){
    console.log("me rompo desde while");
    break;
  }
}

a=0;
do{
  console.log(a)
  ++a;
  if(a==2){
    console.log("me rompo desde do-while");
    break;
  }
}while(a<=3)   

for(let i=0;i<5;i++){
  console.log("el valor de i es: "+i);
  if (i==2) {
    console.log("me rompo desde for");
    break;
  }
}

/*
se utiliza continue para saltarse a la siqguiente iteración

a=0;
while (a<=3){
  console.log(a);
  if(a==2){
    console.log("continuo desde while");
    continue;
  }
  ++a;
}

a=0;
do{
  console.log(a);
  if(a==2){
    console.log("continuo desde do-while");
    continue;
  }
  ++a;
}while(a<=3)   

for(let i=0;i<5;i++){
  if (i==2) {
    console.log("me rompo desde for");
    continue;
  }
  console.log("el valor de i es: "+i);
}

let result=0;