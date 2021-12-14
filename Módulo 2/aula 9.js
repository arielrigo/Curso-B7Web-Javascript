//aula 10

/*
function alterar() {
    document.getElementById('titulo').innerHTML = "Trocou o titulo"
    document.getElementById('titulo').innerHTML = "Trocou o campo"
}

function somar(x , y) {
    let total = x + y

    return total  
}

 var resultado = somar(10 , 15)

 console.log(resultado)


*/


function somar(x , y) {
    let total = x + y

    document.getElementById('campo').value = total
}

somar(10 , 20)