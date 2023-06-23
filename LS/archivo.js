/*
localStorage.setItem("nombre","Bryan")
localStorage.setItem("apellido","Cantillo")
localStorage.setItem("edad",20)

let nom = localStorage.getItem("nombre")
let ape = localStorage.getItem("apellido")
let e = localStorage.getItem("edad")

console.log(nom)
console.log(ape)
console.log(e)
*/

let persona={

    nombre: "Bryan",
    apellido: "Cantillo",
    edad: "18",
    barrio: "Arboleda",
    ciudad: "Barranquilla",

}
localStorage.setItem("estudiante" , JSON.stringify(persona))
let p = JSON.parse(localStorage.getItem(estudiante))
console.log(p)