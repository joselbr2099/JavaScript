
  function changeBg(){

  let n=4;//prompt("dame un numero");
    for(let i=0;i<=n;i++){
      if(i%2==0){
        setTimeout(() => document.body.style.background = "black", 1000);
      }else{
        setTimeout(() => document.body.style.background = "red", 1000);
      }
      console.log("print "+i);
    }
  }
changeBg();

