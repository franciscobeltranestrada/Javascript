//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
//(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function arrayImpares(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
arrayImpares();

