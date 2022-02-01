function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/posts')  // ele retorna uma promise; ele precisa de um paraemtro que seria o link da API e dois seria como você quer que ele entre as informações da API
    .then(function(resultado) {
        return resultado.json() // abrimos um outro .then por que o json ele chama uma Promise também; o .json() transforma as informações em json(json = objeto que contem informações)
    })
    .then(function(json) { 
        montarBlog(json)
    })
    .catch(function(error) {
        console.log('error')
    })
}

function montarBlog() {
    let html = ''

    for(let i in lista) {
        html += '<h3>' + lista[i].title + '<h3>'
        html += lista[i].body+'<br/>'
        html += '<hr/>'
    }
}

        document.getElementById('posts').innerHTML = html
        
    
        //Não vale a pena criar um html pois precisa de um server pra conseguir captar os dados 