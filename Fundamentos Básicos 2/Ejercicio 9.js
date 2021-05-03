//Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, 
//pero sumando 7 a cada uno. No alteres el array original. 
//Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function agregaSiete(arr){
    var nuevoArr = [];
    for (var i = 0; i < arr.length; i++){
        nuevoArr.push(arr[i]+7);
    }
    return nuevoArr;
}

console.log(agregaSiete([2,5,7,9]));

