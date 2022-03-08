//Manipulação de arrays

//Criar array com constructor

let myArray = new Array ('a', 'b', 'c', 'd') //Pode criar array vazia tb


console.log(myArray)

//Contagem de elementos da array

console.log(["a", 2, 
function(){ return "alou"}][2]()) //Acessando a função com [2] e rodando com (). Utilizando o .length para ver o tamanho da array

//Transformando cadeia de char em elementos de um array

let word = "manipulação"

console.log(Array.from(word)) //From transforma elementos de uma array


//Manipulando arrays:

let techs = ["html", "css", "js"]

//Adicionando um item ao fim 
console.log(techs.push('react'))
console.log(techs)

//Adicionando um item no começo
console.log(techs.unshift('Lógica'))
console.log(techs)

//Remover do fim
console.log(techs.pop())
console.log(techs)

//Remover do começo
console.log(techs.shift())
console.log(techs)

//Pegar somente alguns elementos da array
console.log(techs.slice(1, 3))
console.log(techs)

//Remove 1 ou mais items em qualquer posição do array
console.log(techs.splice(1,1))
console.log(techs)

//Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)