let cadastrar = () => {
    event.preventDefault();
    let pessoa = criaPessoa();
    console.log(pessoa);
};

let criaPessoa = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let tipo1 = document.getElementById("tipo1").checked;
    let tipo2 = document.getElementById("tipo2").checked;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let isMale;
    if(male){
        isMale = true;
    } else if (female) {
        isMale = false;
    }

    return new Pessoa(name, email, age, tipo1, tipo2, isMale);
}

let valida = event => {
    let elm = event.target;
    if(elm.id === "email"){
        let alerta = "";
        if(!elm.value.includes("@")){
            alerta += '* É necessário ter "@" no email<br>';
        }
        if(!elm.value.includes(".")){
            alerta += '* É necessário ter "." no email<br>';
        }
        
        enviaAlerta(alerta);
    }
}

let enviaAlerta = alerta => {
    let div = document.getElementById("alerta");
    let salvar = document.getElementsByTagName("button")[1];
    if(alerta){
        div.innerHTML = alerta;
        salvar.setAttribute("disabled", "disabled");
    } else {
        div.innerHTML = "";
        salvar.removeAttribute("disabled");
    }
}

var form = document.getElementsByTagName("form")[0];
form.addEventListener("keydown", valida); 