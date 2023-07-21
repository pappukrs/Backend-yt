const cmdArg=process.argv.slice(2);

  const  [operation,...number] =cmdArg;
//   console.log(operation);
//   console.log(number);

  function performOperation(){
    if(operation=="add"){
        if(number.length!==2){
            console.log("Error:Please type 2 numbers only");
            return
        }
        console.log(Number(number[0])+Number(number[1]));
    }
    else if(operation=="sub"){
        if(number.length!==2){
            console.log("Error:Please type 2 numbers only");
            return
        }
        console.log(Number(number[0])-Number(number[1]));
    }
    else if(operation=="mul"){
        if(number.length!==2){
            console.log("Error:Please type 2 numbers only");
            return
        }
        console.log(Number(number[0])*Number(number[1]));
    }
    else if(operation=="div"){
        if(number.length!==2){
            console.log("Error:Please type 2 numbers only");
            return
        }
        console.log(Number(number[0])/Number(number[1]));
    }
    else{
        console.log("Error:please type valid operation like add,sub,mul,div")
    }
  }

  performOperation();



