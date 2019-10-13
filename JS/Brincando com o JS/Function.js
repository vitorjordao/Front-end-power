// Função
function funcaoLegal(){
    console.log("Sou legal");
}
funcaoLegal();

// Função anônima auto executada
(function(){
    console.log("Sou anônimamente legal");
})();

// Função anônima em uma variável
var funcaoLegalAnonima = function() {
    console.log("Sou anônimo e executável");
}
funcaoLegalAnonima();

// Arroy function
var funcaoArqueira = () => {
    console.log("Atiro flechas");
}
funcaoArqueira();

// Ponteiro this
function Lugares(lugares) {
  this.lugares = lugares;
  this.frases = [];
  
  //Vai dar erro
  /*
  this.formarFrases = function() {
    return lugares.forEach(function(lugar){
        this.frases.push("Eu vou até " + lugar);
    });
  };
  */
 
  this.formarFrases = function() {
    return lugares.forEach((lugar)=>{
        this.frases.push("Eu vou até " + lugar);
    });
  };
}

var meusLugares = new Lugares(["Brasil", "Portugal", "Japão"]);
meusLugares.formarFrases();

console.log(meusLugares.frases);