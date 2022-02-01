/*

let d = new Date()

let res = d.getMonth()

console.log(res)
*/

let m = new Date();

m.setDate(m.getDate() + 100);

let aumentarData = m;

console.log(aumentarData); //setDate(); serve para informar uma nova data e o getDate(); captura a data atual;