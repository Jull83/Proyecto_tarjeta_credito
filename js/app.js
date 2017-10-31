
//Ingresar número válido de tarjeta (16 dígitos).
var numberTarjet=prompt("Ingrese número de tarjeta");
console.log(numberTarjet);

if(numberTarjet.length !=16) {
  alert("Numero Inválido");
}

//Crear arreglo con números
var newNumber = [];
var separarNum = function (array){
for (var i = 0; i < array.length; i++ ) {
  parseInt(newNumber.push(array.charAt(i)));

  }
};

separarNum((numberTarjet));
console.log(newNumber);

//Invertir orden de los números
newNumber.reverse();
console.log(newNumber);

//crear arreglo con posicion para cada número comenzando con 1
var positionNum = [];
var position = function (array){
  for(var i = 0; i < array.length; i++)
    positionNum.push(i+1);

};
position (newNumber);
console.log(positionNum);

//Ubicar  números pares e impares segun su posición
function comprobar (n) {
  for(var i = 0; i < n.length; i++){
  if (n % 2 === 0) {
  console.log ("par")
  } else {
  console.log ("impar")}
  }
}
comprobar(positionNum);
