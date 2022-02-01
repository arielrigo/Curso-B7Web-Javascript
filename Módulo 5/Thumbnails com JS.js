function montar() {
    let imagem = document.getElementById('imagem').files[0]

    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.width = 200

    document.getElementById('area').appendChild(img)
}


/*URL.createObjectURL(imagem) - > 
    cria um novo objeto URL, cujo tempo de vida esta ligado ao document na janela na qual este objeto foi criado,
    O novo objeto URL representa o objeto Fil ou o objeto Blob passado como argumento.
*/