var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?

console.log (users[1].age);

//¿Cómo harías print/log del nombre del primer objeto?

console.log (users[0].name);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?

for (var i = 0; i < users.length; i++){
    console.log (users[i].name,users[i].age);
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?

var persona1 = {
    nombre: "Michael",
    edad: 37,
    };
  
  var persona2 = {
    nombre: "Jonh",
    edad: 30,
    };
  
  var persona3 = {
    nombre: "David",
    edad: 27,
  };
  
  function Nombre(persona) {
  
    if (persona.edad >= 18) {
  return persona.nombre;
    }
  }
  
  console.log(Nombre(persona1));
  console.log(Nombre(persona2));
  console.log(Nombre(persona3));
