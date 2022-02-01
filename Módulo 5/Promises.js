function pegarTemperatura() {
    return new Promise(function(resolve , reject) {
        console.log('Pegando a temperatura')

        setTimeout(function() {
            resolve('Pegou 40 na sombra')
        } , 2000)
    })
}

// Usando o Promise

let temp = pegarTemperatura() // Callback

temp.then(function(resultado) {         // then = então.  Ele serve pra dizer pra Promise que o resultado vai ser o que está em sua função.
    console.log('Temperatura: ' + resultado)
})

temp.catch(function(error){             // catch = senão. Ele serve pra satisfazer o Promise se a requisição der erro ele é acionado
    console.log('Raaaapaaaaz deu erro aqui mermao')
})