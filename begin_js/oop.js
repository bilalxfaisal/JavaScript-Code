// old method to create classes - refer to 111

function setGPA(gpa)
{
    this.gpa = gpa
}

function Student(id, name, gpa){ // 111
    this.id = id
    this.name = name
    
    setGPA.call(this, gpa)

    this.getName = function(){
        return this.name
    }
}

// Array.prototype.sayHi = function(){
//     console.log("Hi !")
// }

const student1 = new Student(551, "Bilal", 3.2)
const student2 = new Student(701, "Arham", 2.7)

console.log(student1.gpa)

// array = [1,2,3,4,5,6]

// array.sayHi()

// ES6 method to create classes 

class Person
{
    constructor(name)
    {
        this.name = name
    }
}
class Employee //extends Person
{
    constructor(id, name, email, salary)
    {
        this.name = name
        this.id = id
        this.email = email
        this.salary = salary
    }

    static applyTax(taxPercentage)
    {
        this.salary -= this.salary * taxPercentage
        return this.salary
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

}

//Employee.prototype = Person
const emp1 = new Employee(551, "Bilal", "bilal@gmail.com", 50000)

//console.log(Employee.prototype)

console.log(emp1.__proto__)
//console.log(Employee.applyTax(0.1))

// when you make a getter always make a setter too and vica versa