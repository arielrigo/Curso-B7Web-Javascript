async function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('link do site')
    let json = await req.json()
    montarBlog(json)
}   


//async Arrow Function: let x = async() => {}

//o await faz a função esperar o resultado para à executar

//o await necessita do 'async' no início da função



