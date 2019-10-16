!!"" // false
!!"hey" // true
!![] // true
!!{} // true
!!0 // false
!!-1 // true
!!0.0 // false
!!0.1 // true
!!1 ou 2 ou ... // true
!!function(){} // true
!!(()=>{}) // true
!!Infinity // true
!!-Infinity // true
!!NaN // false
!!null // false
!!undefined // false
!!true // true
!!false // false

Number.isInteger(15.0) // true
Number.isInteger(15.6) // false

"" == "0"           // false
0 == ""             // true
0 == "0"            // true

false == "false"    // false
true == "true"      // false

false == ""         // true
false == "0"        // true
false === "0"       // false

true == ""          // false
true == "1"         // true
true === "1"        // false

false == undefined  // false
false == null       // false
null == undefined   // true

[] == {} // false
{} == {} // false

let objA = {id: 1, nome: "Ottoniel"};
let objB = objA;

let objC = {id: 1, nome: "Ottoniel"};

objA == objB // true
objB == objC // false

[] == [] // false

(function(){}) == (function(){}) // false

(()=>{}) == (()=>{}) // false 

