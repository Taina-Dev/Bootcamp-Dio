/* COM O THIS */

const celular = {
    value: 6,
};

const fone = {
    value: 4,
};


function mapComThis(arr, thisArg){
    return arr.map(function(item){
     return   item * this.value;
    }, thisArg);
}


const nums = [1, 2];

console.log('this -> celular' ,mapComThis(nums, celular));

console.log('this -> fone' ,mapComThis(nums, fone));