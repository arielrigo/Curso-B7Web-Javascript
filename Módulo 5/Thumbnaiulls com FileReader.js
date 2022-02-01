function mostrar() {
    let reader = new FileReader()
    let imagem = document.getElementById('imagem').files[0] 

    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 200

        document.getElementById('area').appendChild(img)
    }

    reader.readAsDataURL(imagem)
}

    //reader.readAsDataURL(imagem) -> ele usa o FileReader() para ler a imagem

    //reader.onleadend ->quando o carregamento finalizar