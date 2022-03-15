//Throw -> Disparar

function sayMyName(name = '') {
    if (name==='') {
        throw 'Nome é obrigatório'
    }
    console.log('Depois do erro')
}

//Try...Catch -> Tentar... Pegar

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('Após a função de erro')