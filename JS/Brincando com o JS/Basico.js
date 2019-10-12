// Tipos:

// boolean
typeof true;  // "boolean"
typeof false; // "boolean"

// number: integer / float
typeof 15;   // "number"
typeof 15.6; // "number"

Number.isInteger(15)   // true
Number.isInteger(15.6) // false

// string
typeof "";
typeof '';
typeof ``; 

console.log('Ola "Mundo"');
console.log("Ola 'Mundo'");

// Interpolação de string
var a = "kran";
console.log("Olá ${a}"); // Olá ${a}
console.log('Olá ${a}'); // Olá ${a}
console.log(`Olá ${a}`); // Olá kran

// object
typeof {}; // "object"
let banana = {
    cor: "Amarela",
    temCasca: true
}; 
console.log(banana);

// Array / List
typeof []; 

let listaLegal = [10, "Olá", 1.6, {}]
console.log(listaLegal);

// function
typeof function(){} // "function"
typeof (()=>{})     // "function"

// null / undefined / NaN
typeof null;      // "object"

typeof undefined; // "undefined"

typeof NaN;       // "number"


// Hoisting:

// Com variáveis
var x= 1;

if(x === 3){
    var y= 1;
}

console.log(x); // 1
console.log(y); // undefined
console.log(z); // ERROR