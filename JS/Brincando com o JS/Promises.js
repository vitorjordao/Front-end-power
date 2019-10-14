// Dependências: ARROW FUNCTION E CALLBACK

let promise = new Promise((Resolve, Reject) =>
{
    setTimeout(function() // simular uma operação que demanda um tempo
    {
        Resolve("TUDO OK!");
        //Reject("HOUVE ERRO.");
        
    }, 3000);

});

console.log(promise); // <- objeto promise

promise
.then((resposta) =>  // <- metodo "then" da promise - Usado quando tudo ocorrer bem
{
    console.log(resposta);
})
.catch((resposta) => // <- metodo "catch" da promise - Usado quando algum erro acontecer
{
    console.error(resposta);
});

console.log("O programa continua...");