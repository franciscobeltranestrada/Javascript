//Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
//Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function dobleVisión(arr){
    var nuevoArr = [];
    for (var i = 0; i < arr.length; i++){
        nuevoArr.push(arr[i] * 2);
    }
    return nuevoArr;
}
console.log(dobleVisión([4,9,7,5]));



