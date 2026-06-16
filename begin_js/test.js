"use strict" // treat all js as newer version of javascript

// console.log("Bilal")
// let name = "Bilal"
// let city = "Rawalpindi"
// let age = 20.03
// let type;

// console.table([name, city, age, type])

// console.log(typeof name)

// // alert(3+3) // used in browser not in nodejs

// // undefined - undefined
// // null - object


// console.table([typeof age, age])

let Student = 
{
    name: "Bilal",
    age: 20
}

// console.table([typeof Student, Student])

// let func = function()
// {
//     return (2+2)
// }

// console.log(func)

let age = 20
let name = "Bilal"

console.log(`My name is ${name} and my age is ${age}`)
let arr = ["Bilal", 20, 20.34, false, null]

let newArr = arr.join()

console.log(Student["name"], Student["age"])
// console.log(newArr)

console.log(Student)

const {name: studentName} = Student

console.log(studentName)

let studentName = "Arham"

console.log(studentName)