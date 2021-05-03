//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 
//Puedes usar un operador de módulo para este ejercicio. 

function sumaPares0Al(x){
    var suma = 0
    for (var i=1; i<=x; i++){
      if (i%2 == 0) {
        suma += i
      }
    }
    return suma
  }
  
  console.log(sumaPares0Al(1000));
  