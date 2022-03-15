//If... else

let temperatura = 37.2

if( temperatura >= 37.5) {
    console.log("Febre")

} else if ( temperatura < 37.5 && temperatura >= 37 ){
    console.log("Febre moderada")
} else if (temperatura <= 35 ) {
    console.log("Hipotermia")
} else {
    console.log("Saúdavel")
}