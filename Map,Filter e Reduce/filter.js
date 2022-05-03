/* FILTER E RETORNE TODOS OS NUMEROS PARES DE UM ARRAY 
E NUMEROS IMPARES*/

function filtarPares(arr){
    return arr.filter(callback);
}

function filtarImpares(arr){
    return arr.filter(callback2);
}

function callback(item){
    return item % 2 === 0;
}

function callback2(item){
    return item % 2 !== 0;
}

 
const nums = [2, 6, 8, 5, 3, 1, 89, 84, 76, 45, 44];



console.log('Os Numeros pares sãos', filtarPares(nums));

 
console.log('Os Numeros imparess sãos', filtarImpares(nums));