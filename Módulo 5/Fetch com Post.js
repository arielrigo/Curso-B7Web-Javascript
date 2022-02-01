async function inserirPost() {
    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder...' , {
        method : 'POST' , 
        body : JSON.stringify({
            title: 'Titulo de teste',
            body : 'Corpo de teste',
            userId : 4
        }) , 
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    let json = await req.json()


    console.log(json)
}

//Nesse método escolhemos as informaçoes que iremos enviar pra a API

// passaremos as informações do 'Body' para string


/*
Metodo: 
        Post
        O metodo post é utilizado para submeter uma entidade a um recurso especifico,
        frequentemento causando uma mudança no estado do recurso ou efeitos colaterais

        O mettodo é sempre o segundo parâmetro do fetch.
*/


// o header é necessario pra API saber que tipo de elemento estamos mandando