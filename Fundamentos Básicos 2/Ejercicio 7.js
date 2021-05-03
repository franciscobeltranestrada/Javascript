//Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice 
//es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

function incrementarSegundos(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementarSegundos([2,3,4,5,6]));

