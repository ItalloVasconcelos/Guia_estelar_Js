// Switch

/*let expression = 'a'

switch (expression) {

    case 'a':
        // Código para expressão a
        console.log('a')
        
    case 'b':
        console.log('b')
        
        //Código para expressão b
    default:
        console.log('default')
        break

}
*/

function calculate(number1, operator, number2) {

    let result 

switch (operator) {
    case '+':
        result =  number1 + number2
        break
    case '-':
        result =  number1 - number2
        break
    case '*':
        result =  number1 * number2
        break
    case '/':
        result =  number1 / number2
        break
    default:
        console.log('Não implementado')
        break
}

return result
}

console.log(calculate( 4, '+', 10 ))