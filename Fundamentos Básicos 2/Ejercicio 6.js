//Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
//imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function paresImpares(arr){
    var impares = 0;
    var pares = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            impares++;
            pares = 0;
        }else{
            pares++;
            impares = 0;
        }
        if (impares == 3){
            console.log("¡Que imparcial!");
            impares = 0;
        }else if(pares == 3){
            console.log("¡Es para bien!");
            pares = 0;
        }
    }
}
paresImpares([5,5,5,4,4,4,7,7,7])

