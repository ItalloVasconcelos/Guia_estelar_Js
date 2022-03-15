/*
    Operadores artméticos:
*/

//--> Multiplicação : *
console.log("Essa é uma multiplicação de 3 * 9 = " + (3 * 9))

// --> Divisão : /
console.log("Essa é uma divisão de 4 / 2 =  " + (4 / 2))

// --> Soma: +  
// --> Subtração: -
console.log("Soma de 32 + 50 = " + (32 + 50))
console.log("Subtração de 32 - 40 = " + (32 - 40))

// Resto da divisão: %
console.log("Resto da divisão de 40 / 2 = " + (40 % 2))

// Incremento: ++i ou i++
let increment = 1
console.log("Incremento de 1 = " + (++increment))

// Decremento: --i ou i--
let decrement = 1
console.log("Decremento de 1 = " + (--decrement))

// Exponencial: **
console.log("Exponencial de 3 ^ 3 = " + (3 ** 3))

// Operadores de comparação

// = : Tem finalidade de atribuir valores
let one = 1
let two = 2
// == : igual a 
console.log( two == 1 ) // => Recebe false, pois não são os mesmos valores
console.log( one == 1 ) // => Recebe true, pois são os mesmos valores
// === : Estritamente igual -> Valor e tipo
console.log(two === 2) //=> Recebe true, pois são os mesmo valores e tipos iguais
console.log(two === '2') // => Recebe false, pois são os mesmo valores, porém tipos distintos
// != : diferente de 
console.log(one != 2)
console.log(one != 1)
// !== : Estritamente diferente
console.log(one !== 1)
console.log(one !== "1")

// > :  Maior que 
console.log(1 > 3) //=> False, pois 1 é menor que 3

// < : Menor que
console.log(1 < 3) // => True, pois 1 é menor que 3

// >= : Maior ou igual
console.log(one >= two) // => False, pois 1 não é maior nem igual a 2

// <= : Menor ou igual
console.log(one <= two) // => True, pois 1 é menor que 2, mas não é igual, porem é menor ou igual