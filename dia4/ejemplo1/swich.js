"use strict";
let a=6;

/*
structura multiple swich

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
*/
let result;

switch(a){
    case 5:
        console.log("es 5");
        result=5;
        break;
    case "d":
        console.log("es d");
        result="d";
        break;
    case true:
        console.log("es bool");
        result=true;
        break
    default:
        result=a;
        console.log("es otra cosa");
}