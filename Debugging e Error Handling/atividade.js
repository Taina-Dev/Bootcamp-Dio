function validaArray(arr, num){
    try {

     if (!arr && !num) throw new ReferenceError('Atenção! Envie os parâmetros');

     if (typeof arr !== 'object') 
       throw new TypeError('Array tem que ser do tipo object');

     if (typeof num !== 'number') 
     throw new TypeError('Erro Atenção o Array tem que ser do tipo number');
  
     if (arr.length !== num) 
     throw new RangeError('Tamanho é Invalido ;-?');

     return arr;
    } catch(e) {
      if(e instanceof ReferenceError){
          console.log("Este erro é um ReferenceError")
          console.log(e.message);
      } else if(e instanceof TypeError){
        console.log("Este erro é um TypeError")
        console.log(e.message);
      } else if(e instanceof RangeError){
        console.log("Este erro é um RangeError")
        console.log(e.message);
      } else{
          console.log("Atençao erro Desconhecido ;-/:" + e);
      }
    }
   
}
console.log(validaArray([], 6))