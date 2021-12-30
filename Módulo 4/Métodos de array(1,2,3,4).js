//Métodos de arrays 1/4
/*
let lista  = ['ovo' , 'Farinha' , 'corante']

lista.pop()

lista.shift()

lista.push('massa')

lista[3] ='aa'

let res = lista.join('-')

console.log(res)



//Métodos de arrays 2/4

let lista = ['ovo' , 'farinha' , 'corante']

lista.splice(2 , 1)  //ele retira os itens selecionados, o primeiro parametro é onde ele começa e o segundo é quantos itens ele pega

console.log(lista)

let lista = ['ovo', 'farinha', 'corante']
let lista2 = ['fogao', 'liquidificador', 'geladeira']

lista.reverse()

let res = lista.concat(lista2)

console.log(res)


//Métodos de arrays 3/4

let lista = [45, 4, 6, 8, 14, 23]
let lista2 = []

lista2 = lista.map(function (item) {
    if(item > 20) {
        return 'esse ta maior que vinte ein negao'
    } else {
        return false
    }
})

console.log(lista2)

lista2 = lista.filter(function(item) {
    return (item > 20)? true  : false
    }
)

console.log(lista2)

*/

//Métodos de array 4/4

let lista = [45, 4, 6, 8, 14, 23]
let lista2 = []

lista2 = lista.find(function(item){
    if (item == 6) {
        return true 
    } else {
        return false
    }
})

console.log(lista2)


let lista = [45, 4, 6, 8, 14, 23]
let lista2 = []

lista2 = lista.findIndex(function(item){
    if (item == 6) {
        return true 
    } else {
        return false
    }
})

console.log(lista2)