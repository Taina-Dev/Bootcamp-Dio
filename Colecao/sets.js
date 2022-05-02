const myArrey = [34, 45, 76, 34 , 3, 12, 90, 67, 5467, 13554, 1];


function valoresUnicos(arrey){
 const mySet = new Set(arrey);

 return [...mySet];
}

console.log(valoresUnicos(myArrey));