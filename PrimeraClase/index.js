// let / var son las palabras reservadas para declarar variables
// const es la forma de declarar constante

// scope mal, mejor no usar var porque var crea las variables en el scope global siempre.

var malScope = 10;

{
  //  var variable = 200;
  var malScope = 20;
  malScope
}

malScope

// buen scope, la palabra reservada let respecta el scope, cuando declaras una variable con let se declara en el scope local.
let buenScope = 10;

buenScope
{
  // let variable = 200;
  let buenScope = 20;
  buenScope
}
buenScope

///// pass by value
/*
  Cuando se trata de pasar por valor se crea una copia del valor de 2da variable en la primera variable  
*/
let c; //declarar una variable
c = 10; // inicializar una variable
// pointer    value
let a      =    4; 
let b = a;

a = 5;
b

//// pass by reference 
/*
  Cuando se trata de pasar por referencia pasa el pointer de la variable b a la variable a, lo cual hace que ambos tengan el puntero a los mismos valores por ende tengan los mismos valores.
*/

       //  0  1  2  3
let arr = [1, 2, 3, 4];
let arrb = arr;

console.log(arrb);

// esta es una forma de hacer lo de abajo
arr2 = new Array(3);
arr2[0] = 10;
arr2[1]= 20;
arr2[2] = 30;

// de hacer esto

arr = [10,20,30] // aqui pierde la referencia inicial porque se le esta dando un array nuevo.

// arr[1] = 10
arr
arrb

//todo en js son objetos, aqui esta una forma para que entiendan que un array es lo mismo que un obj
        // 0  1  2  3
let arr = [1, 2, 3, 4];
let obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4
}

console.log(arr[1])
console.log(obj[1])



console.log(typeof 10 > 20)

// las condiciones coje true o false,  10>20 esto retorna true o false, ojo con eso.

if (10 > 20) {
  console.log("algo")
}
else if (20 == 10) {
  console.log("algo diferente")
}
else{
  console.log("ninguna")
}
typeof 10 > 20;
                    // esto es una forma de hacer una operacion ternaria, lo cual seria igual a una condicion en linea 
console.log( 20 > 10 ? true : false );

// Tipos de datos que dan verdadero y los que dan falso.
// falsely       truesly
// 0              1
// ""             "algo"
// undefined      []
// null           {}

let a = "hola";
let b = 20
console.log(a ?? b ); // esta es una forma en la cual retorna el primer valor en caso de existir, pero si no existe el primero pues retorna el 2do valor como valor default.

// aqui estan los diferentes ciclos.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
for (let i = 0; i < arr.length; i++) {
  if(i ===  3){
    continue; // esto sirve para pasar una iteracion.
  }
  console.log(arr[i])
}

// No usarlo
let i = 0
do {
  i++
  console.log(i)
} while (false);

// stack overflow

// los Whiles se utilizan cuando no se sabe cuantas veces necesitas iteral.
let arr = [1,20,15,28,18,230];
let index = 0;
while (true) {
  if(arr[index] === 28){
    break;
  }
  index++
}
index

// Los for se usan cuando conoces el numero especifico de veces que quieras iteral. 

for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 28){
    index = i  
  }
}
index

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(e => {
  console.log(e)
});

let decision = 1;
switch (decision) {
  case 0:
    console.log("decision es 0")
    break;
  case 1:
    console.log("decision es 1")
    break;

  default:
    console.log("la decision no es ninguna de las opciones")
    break;
}

function sumar(a, b) {
  console.log(a + b)
}

// ES6+, esta es la forma moderna de escribir javascript

let obj = {
  nombre: "name",
}
const {nombre} = obj;
const otra = obj.nombre

function sumar2 (a,b){
  return a + b;
}

const sumar = (a,b) => a+b;

let arr = [1,2,3,4,5,6];
console.log(...arr)

// esta es una forma resumida de hacer la funcion de abajo.

const isPar = (num) => num % 2 === 0 ? "si es par": "no es par";

function isPar(num) {
  if(num % 2 ){
    return "si es par"
  }
  else{
    return "no es par"
  }
}

console.log(isPar(2));


//estos son callbacks

const multiplicar = (a,b)=> a *b; // estas son funciones guardadas en constante.
const dividir= (a,b)=> a/b;
const sumar= (a,b)=> a+b;
const restar= (a,b)=> a-b;

// esta es una funcion que recibe un callback osea una funcion por parametro.
const callBack = (a, b, fn) => {
  return fn(a, b);
}

const resultado = callBack(5,5,sumar )
resultado;

// aqui hay un ejemplo de como se usan los callbacks en el mundo laboral
let arr =[1,2,3,4,5];
console.log(arr.map((e)=> e * 2))

/* investiguen como funcionan el map */



// esta es una funcion recursiva, la cual no les recomiendo entrar hasta que se sientan bien con ellas.

function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibonacci(num-1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(10));


