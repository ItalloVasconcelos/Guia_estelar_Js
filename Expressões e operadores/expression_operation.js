/*
Expressões e operadores
-> Expressions
-> Operators:
- Binary : 2 operadores > 1+1
- Unary: Apenas um valor:
        
- Ternary: Expressão > (false ? 'alo' : 'nada')

New -> Serve para criar um novo objeto = 
    

*/
//New
let name = new String('Itallo')
    name.surName = "Vasconcelos"
    let age = new Number(24)
    console.log(name.surName, age)

// Delete unary
const person = {
    name: 'Itallo',
    age: 24
}
delete person.age
console.log(person)