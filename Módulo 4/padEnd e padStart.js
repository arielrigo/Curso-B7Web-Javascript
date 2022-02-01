let telefone = '5'

console.log(telefone.padEnd(9 , '*')) // 5********

console.log(telefone.padStart(9 , '*')) // ********5




let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4)

let cartaoMasc = lastDigits.padStart(16 , '*')

console.log(cartaoMasc)  // ************1234

