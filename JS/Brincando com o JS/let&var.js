// LET E VAR

const GLOBAL = "Eu sou uma constante global"; 
var globalVar = "Eu sou uma VARiavel global";
let globalLet = "Eu sou um let global";

function f1()
{
    for (i = 0; i < 1; i++)
    {
        let filhoLet = "Filho LET";
        var filhoVar = "Filho VAR";

        console.log(filhoLet + " do for");
        console.log(filhoVar + " do for");
    }

    // globais
    console.log();
    console.log();

    console.log(filhoVar + " da f1()");
    // console.log(filhoLet + " da f1()"); // erro
    
}

// console.log(filhoVar); // erro

function f2()
{
    // console.log(filhoVar + " da f2()"); // erro
}

f1();
f2();

