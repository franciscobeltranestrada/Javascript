//Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores 
//sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function siempreHambriento(arr){
    var tengoComida = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "comida"){
            console.log("yummy");
            tengoComida = true;
        }
    }
    if (tengoComida == false){
        console.log("tengo hambre");
    }
}

siempreHambriento([8,1,"comida"]);

