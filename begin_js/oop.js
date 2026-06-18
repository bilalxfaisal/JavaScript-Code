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


// function greet(city, job) {
//   console.log(this.name, city, job);
// }

// const user = { name: "Bilal" };

// greet.call(user, "Rawalpindi", "Developer");

function introduce(city, profession) {
    console.log(
        `Hi, I'm ${this.name} from ${city} and I'm a ${profession}.`
    );
}

const user = { name: "Bilal" };

const introBilal = introduce.bind(user, "Rawalpindi", "Developer");

introBilal();

Object.defineProperty(Employee, "name", {
    value: "Employee Class",
    writable: false,
    configurable: false,
})
const desc = Object.getOwnPropertyDescriptor(Employee, "name")
console.log(desc)

// call: execute function with specific this value - pass arguments saperately
// apply: execute function with specific this value - pass arguments as an array
// bind: doesnt execute immediately - returns a function with specific this value

// - works fine
const student = {
    name: "Bilal",
    greet: function() {
        console.log(`Hello, I'm ${this.name}!`)
    }
}

student.greet()

// - works using call

function introduceMe(city){
    console.log(`Hello, I'm ${this.name} from ${city}!`)
}
// doesnt know which this to use (uses its own this which is window) - 
// so we use call to specify the this

const student3 = {
    name: "Arham"
}

introduceMe.call(student3, "Rawalpindi")


// -  works using bind - but we have to call the function returned by bind

const introArham = introduceMe.bind(student3)
introArham("Rawalpindi")


