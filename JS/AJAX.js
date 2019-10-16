const AJAX = function (method, uri, data = null)
{
    return new Promise((Resolve, Reject) => 
    {
        try
        {
            let xhr = new XMLHttpRequest();

            xhr.open(method, uri, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            
            if (!!data)
                xhr.send(JSON.stringify(data));
            
            else
                xhr.send();

            xhr.onreadystatechange = () =>
            {
                if (xhr.readyState == 4)
                    switch(xhr.status)
                    {
                        case 200:
                            Resolve({status: xhr.status, response: JSON.parse(xhr.response)});

                        case 404:
                            Reject(xhr.status, ": API NÃO ENCONTRADA.");

                        case 500:
                            Reject(xhr.status, ": FALHA NA API.");

                        default:
                            Reject(xhr.status, ": ERRO INESPERADO.");
                            break;
                    }
            }

        }
        catch(ex)
        {
            Reject(ex);
        }
    });
}

// AJAX("GET", "https://api-para-minicurso.herokuapp.com/getPessoas").then(response => console.log(response));