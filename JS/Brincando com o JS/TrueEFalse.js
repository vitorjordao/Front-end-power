if('') {true;} else { false ;}           // false
if([]) {true;} else { false ;}           // true
if({}) {true;} else { false ;}           // true
if(0) {true;} else { false ;}            // false
if(8) {true;} else { false ;}            // true
if(0.0) {true;} else { false ;}          // false
if(0.1) {true;} else { false ;}          // true
if(function(){}) {true;} else { false ;} // true
if(()=>{}) {true;} else { false ;}       // true

Number.isInteger(15.0) // true
Number.isInteger(15.6) // false


'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
true == 'true'      // true
false == '0'        // true

true == '1'         // true
true === '1'        // false

true == true        //true
true === true       //true
true === 'true'     // false

false == undefined  // false
false == null       // false
null == undefined   // true
