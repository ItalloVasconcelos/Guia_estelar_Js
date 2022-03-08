/*
 Function() constructor
 -> Expressão new
 -> Criar um novo objeto
 -> this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const itallo = new Person("Itallo")
const joao = new Person("João")


console.log(itallo.walk())
console.log(joao.walk())