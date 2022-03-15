// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplo

//Café da manhã

let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast) // Resultado - > Café top, pois os dois são true, porém se um for false apresentará Café ruim


// Operador de String (String operator)

// Comparison (Comparação)
console.log('a' == 'a')

//Concatenation (Concatenação) -> Retorna a união de duas Strings

let alpha = 'Alpha'

console.log( alpha + 'bet' + 's') // Retorna Alphabets
console.log( `${alpha} bets` ) //Outra maneira de concatenação


/* 
-> FALSY
        Quando um valor é considerado false em contextos onde um booleano é obrigatorio (Condicionais e Loops)

        false
        0
        -0
        ""
        null
        undefined
        NaN

-> TRUTHY
        Quando um valor é considerado true em contextos onde um booleano é obrigatorio ( condicionais e loops )
        true
        {}
        []
        1
        3.23
        "0
        "false"
        -1
        Infinity
        -Infinity
*/

/*
    Operador precedence (Precedência de operadores)

    -> Grouping                     ()
    -> Negação e Incremento         !    ++  --
    -> Multiplicação e divisão      *   /
    -> Adção e subtração            +   - 
    -> Relacional                   <  <=     >   >=
    -> Igualdade                    ==   !=  ===     !==
    -> AND                          &&
    -> OR                           ||
    -> Condicional                  ? :
    -> Assignment(atribuição)       =    +=  -=  *=

*/