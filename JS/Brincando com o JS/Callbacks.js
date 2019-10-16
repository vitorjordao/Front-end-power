// Dependências: FUNCTIONS

let hiFunction = function (nome)
{
    return "Olá " + nome + "!!";
};

let byeFunction = function (nome)
{
    return "Tchau " + nome + "!";
};

let dizerAlgo = function (nome, callback)
{
    nome = "sr. " + nome;

    return callback(nome);
};

let hi = hiFunction("Ottoniel");
let bye = byeFunction("Ottoniel");

let saySomething = dizerAlgo("Ottoniel", byeFunction);

console.log(hi, bye, saySomething);

