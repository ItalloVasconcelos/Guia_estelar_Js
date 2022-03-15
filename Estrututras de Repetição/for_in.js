// For... in

let person = {
    name: 'Itallo',
    age: 30,
    weihjt: 112
}

for(let property in person) {
    console.log(property) // -> Os objetos que compõem o person
    console.log(person[property]) // -> Os valores dos objetos do person
}