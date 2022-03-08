// Arrow Functions

const sayMyName = () => {
    console.log('Itallo')
}

sayMyName()

//Callback functions

function sayMyName1(name) {
   console.log('Antes do callback')
   // Fica a mesma coisa assim:
   function name1() {
       console.log('A callback dentro da função')
   }
    name() //Chama o name do callback
    name1() //Chama o name de dentro da função. 
    console.log('Apos o callback')
}

sayMyName1(
    () => {
        console.log('Estou invocando um callback')
    }
)