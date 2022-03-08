//Function expression ou function anonymous:
//number 1 e number2 são parâmetros (parameters)
const sum = function(number1, number2) { //São parâmetros
    let total = number1 + number2 //Não deixar a variavel solta, sempre tentar usar como escopo (Let ou var)
    return total //Precisa de um return para ser lido os parâmetros da função
}

sum(2, 3) // são arguments -> argumentos

let number1 = 43
let number2 = 30

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma  é ${sum(number1,number2)}`)
//console.log (total) //Não fazer isso.


function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', ' melancia')
console.log(copo)
