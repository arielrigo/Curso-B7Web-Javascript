//Desconstruindo OBJ 1/2

let pessoa = {
    nome: 'Bonieky' , 
    sobrenome: 'Lacerda' , 
    idade: 90 , 
    social: {
        facebook: 'b7web' ,
        instagram: 'bonieky'
    },
    nomeCompleto:function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
    

let {nome , sobrenome , idade = 0 , social:{instagram}} = pessoa // ele vai mostrar  o nome completo da pessoa o instagram e se n existir idade ele vai pra 0 automaticamente


console.log(pessoa.nomeCompleto() , instagram , idade) 


//Desconstruindo OBJ 2/2


let {nome , sobrenome , idade , social:{url:instagram}} // ele pega o url e muda o nome pra instagram



function pegarNomeCompleto(obj) {
    let nome = obj.nome
    let sobrenome = obj.sobrenome

    return `${nome} ${sobrenome}`

    
}                                           // Desconstruindo obj em uma função





