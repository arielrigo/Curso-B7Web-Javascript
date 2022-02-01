async function enviar() {
    let arquivo = document.getElementById('arquyivo')

    let body = new FormData()
    body.append('title' , 'bla bla bla')
    body.append('arquivo' , arquivo)

    let req = await fetch('link do site' , {
        method : 'POST' , 
        body: body,
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    })

}


//new FormData() -> Fornece uma maneira fácil de construir um conjunto de pares chave/valor representando campos de um elemento form e seus valores

//body.append() -> ele vai acrescentar as informações / arquivos desejados

//'Content-Type' : 'multipart/form-data' -> ele simula um formulario para que possamos enviar os arquivos