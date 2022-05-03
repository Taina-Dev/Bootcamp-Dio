/* SOMA DE NUMEROS de ARRAY*/

function somaNumeros(arr) {
   return arr.reduce(function(prev, current){
       console.log({prev});
       console.log({current});
        return prev + current;
    })
}

const nums = [100,45,55,89,900];
console.log( 'Resultado Final é:',somaNumeros(nums));