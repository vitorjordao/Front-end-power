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

let a = hiFunction("Ottoniel");
let b = byeFunction("Ottoniel");

let c = dizerAlgo("Ottoniel", byeFunction);

console.log(a, b, c);

