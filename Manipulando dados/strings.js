let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") //Removendo os valores

let phraseWithUnderscore = myArray.join("_") // Adicionando o valor

console.log(phraseWithUnderscore)


console.log(phrase.includes("Amor")) //Verificação se tem a string na frase... é sensitive case.