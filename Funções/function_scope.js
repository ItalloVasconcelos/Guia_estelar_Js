// Function Scope
let subject = 'Create video'

function createThink(subject) { //Esse é o escopo da função e seu parâmetro, sem esse parâmetro a função vai pegar a var do escopo global
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// Function Hoisting -> Como se reorganizasse a function para antes de ser chamada! Var e Const não da certo, somente a function

sayMyName()

function sayMyName() {
    console.log('Itallo')
}