//Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
//Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function tamañoGrande(arr){
    for (var i = 0; i < arr.length; i++){
       if (arr[i] > 0){
            arr[i] = "big";
       }
   }
   return arr;
}
console.log(tamañoGrande([3,-7,8,-1,9]));

