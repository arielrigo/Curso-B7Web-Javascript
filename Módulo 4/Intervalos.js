//Intervalos 1/2

function showTime() {
    let d = new Date()
    let h = d.getHours() 
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+':'+m+':'+s

    document.querySelector('.demo').innerHTML = txt
}



let timer;

function começar() {
    timer = setInterval(showTime, 1000) // ele seta um intervalo no timer de 1 segundo (ele funciona por milisegundos)
}
function parar() {
    clearInterval(timer) // ele para o timer
}




//Intervalos 2/2

let timer
function rodar() {
   setTimeout(function() {
    document.querySelector('.demo').innerHTML = 'Rodou!'  // ele bota um tempo para rodar uma função
   } , 2000) // 2 seg
}

function parar() {
    clearTimeout(timer)
}