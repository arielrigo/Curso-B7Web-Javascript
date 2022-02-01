let lista = ['ovo' , 'farinha' , 'pao']

console.log(Object.keys(lista))   //[ '0', '1', '2' ]


console.log(Object.entries(lista)) // [ [ '0', 'ovo' ], [ '1', 'farinha' ], [ '2', 'pao' ] ]



let pessoa = {
    nome:'ariel' ,
    sobrenome: 'rigo' ,
    idade: 60
}

console.log(Object.keys(pessoa)) //[ 'nome', 'sobrenome', 'idade' ]