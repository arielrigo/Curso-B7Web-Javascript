//Operador Spread:

let num = [1,2,3,5,6] 

let outrosNum = [...num,7,8,9,10]   // ele faz tipo uma concatenação

    console.log(outrosNum)




let info = {
    nome: 'Ariel',
    sobrenome:'Rigo',
    idade:'15'
}

let maisinfo = {
    ...info,
    cidade:'Erechim',
    estado:'RS',
    pais:'brazil'
}

console.log(maisinfo)




function adicionarInfo(info) {   
    let coninfo = {
        ...info,
        status:'Logado',
        token:'ahujghsoidfas',
        data_cadastro:'.....'
    }
    return coninfo
}

console.log(adicionarInfo({nome:'Ariel',sobrenome:'Rigo', idade:'15' }))











// Operador Rest:
/*

function adicionar(...numeros) {
    console.log(numeros)
}

adicionar(1,2,3,4,6,7)



function adicionar(...nomes) {
    console.log(nomes)
}

adicionar('arz' , 'caio' , 'bhtx')




function adicionar(nomes , ...novosNomes) {
    let novoconjunto = [
        ...nomes ,
        ...novosNomes
    ]
    return novoconjunto
}

let nomes = ['ariel' , 'paulo']

let outros = adicionar(nomes, 'antonio' , 'maria')


console.log(outros)
*/