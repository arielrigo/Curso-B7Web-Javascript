function Trocarimagem(filename , animalname) {
    document.querySelector('.imagem').setAttribute('src' , 'images/'+ filename)
    document.querySelector('.imagem').setAttribute('data-animal' , animalname)
}   

function Pegaranimal() {
   let res = document.querySelector('.imagem').getAttribute('data-animal')
    window.alert('O animal é ' + res)
}