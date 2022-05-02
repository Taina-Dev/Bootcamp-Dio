function getAdmins(map){
    let admind = [];
     for([key, value] of map){
         if(value === 'Admin'){
           admind.push(key)
         }
     }
     return admind;
}

const usuarios = new Map();

usuarios.set('Taina', 'Admin');
usuarios.set('Alexandre', 'Admin');
usuarios.set('Roseli', 'Usuer');
usuarios.set('Vinicius', 'User');

console.log(getAdmins(usuarios))