//Stringify:

console.log(JSON.stringify({nome : 'Bonieky' , idade:90 , estetica:{altura: 900, peso : 10}}))

 // {"nome":"Bonieky","idade":90,"estetica":{"altura":900,"peso":10}}


//Parse:

let pessoa = JSON.parse('{"nome":"Bonieky","idade": 90, "estetica":{"altura":900,"peso":10}}')

console.log(pessoa)
// { nome: 'Bonieky', idade: 90, estetica: { altura: 900, peso: 10 } }



//JSON é um objeto JS que nele você armazena uma ou mais informações