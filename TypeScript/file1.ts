let myname: string = "Bilal";
const age: number = 20;
let weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let square: (x: number) => number;
square = function(value: number){
    return value * value;
}

interface User 
{
    username: string;
    email: string;
    age: number;
}

function createUser(username: string, email: string, age: number): User 
{
    return {username, email, age};  
}

const user1 = createUser("john_doe", "john@example.com", 30);
console.log(user1);

// decalare your own types in typescript

type Weather = "sunny" | "rainy" | "cloudy" | "snowy";

function getWeatherForecast(weather: Weather): string {
    switch (weather) {
        case "sunny":
            return "It's a bright and sunny day!";
        case "rainy":
            return "Don't forget your umbrella, it's raining!";
        case "cloudy":
            return "It's a bit gloomy with all the clouds.";
        case "snowy":
            return "Time for some snow fun!";
    }
}

const todayWeather: Weather = "sunny";
console.log(getWeatherForecast(todayWeather));

// use union to allow multiple types for a variable

function getID(id: number | string){}

function wrapInArray(obj: string | string[]) 
{
  if (typeof obj === "string") 
    {
    return [obj];
            
  }
  return obj;
}

// an object can be initialized with different types each time

interface Value<Type> {
    value: Type;
    get: () => Type;
    set: (newValue: Type) => void;
}

const stringValue: Value<string> = {
    value: "",
    get() {
        return this.value;
    },
    set(newValue: string) {
        this.value = newValue;
    }
};
const numberValue: Value<number> = {
    value: 0,
    get() {
        return this.value;
    },
    set(newValue: number) {
        this.value = newValue;
    }
};

stringValue.set("Hello, TypeScript!");
console.log(stringValue.get());
numberValue.set(42);
console.log(numberValue.get());

// tuples in typescript

type Student = [id: number, name: string, gpa: number];

const student1: Student = [1, "Alice", 3.8];
const student2: Student = [2, "Bob", 3.5];

// enum in typescript

enum Direction { North = 0, East = 1, South = 2, West = 3 }

function move(direction: Direction) {
    switch (direction) {
        case Direction.North:
            console.log("Moving North");
            break;
        case Direction.East:
            console.log("Moving East");
            break;
        case Direction.South:
            console.log("Moving South");
            break;
        case Direction.West:
            console.log("Moving West");
            break;
    }
}
 
// literal types in typescript

type Status = "success" | "error" | "loading";

// intersection types in typescript

type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567"
};

// Primitive Types in TypeScript
// string, boolean, number, bigint, symbol, null, undefined

// Type inference: TypeScript guesses the type
// Type annotation: You explicitly specify the type

// Customer instanceof Person - check if customer is an instance of the Person class
// 'makeDeal' in Customer - check if the 'makeDeal' method exists in the customer object

// interfaces - can be used to define the shape of an object, a function, or a class
// function in interfaces can be altered by the class that implements the interface, but the shape of the function must be maintained

interface Shape {
    area: (x: number, y: number) => number;
}

// we cant directly add a function in an interface, so we make another interface for the function and then extend it in the main interface

interface ExtendedShape extends Shape {
    perimeter: (x: number, y: number) => number;
}

class Circle implements ExtendedShape {
    area(x: number, y: number): number {
        return Math.PI * x * y;
    }
    perimeter(x: number, y: number): number {
        return 2 * (x + y);
    }
}

class TriangleClass implements Shape {
    area(x: number, y: number): number {
        return 0.5 * x * y;
    }
    perimeter(x: number, y: number): number {
        return x + y + Math.sqrt(x * x + y * y);
    }
}

// if a interface is extended from a class A, then only those classes can implement that interface which are also extended from class A

class BaseClass {
    baseMethod() {
        console.log("This is a method from the base class.");
    }
}
interface ExtendedInterface extends BaseClass {
    extendedMethod(): void;
}
class DerivedClass extends BaseClass implements ExtendedInterface {
    extendedMethod() {
        console.log("This is a method from the derived class.");
    }
}

// AnotherClass gives error becuase it is not extended from BaseClass

// class AnotherClass implements ExtendedInterface {
//     extendedMethod() {
//         console.log("This is a method from another class.");
//     }
// }

// can be made error free if we make the method extended in interface again saperately

class AnotherClass implements ExtendedInterface {
    baseMethod(): void {
        console.log("This is base method from another class")
    }
    extendedMethod() {
        console.log("This is a method from another class.");
    }
}

// Type Assertions:

// gives error because el is of type Element .... which has no attributes named value
// let el = document.querySelector('input["type="text"]');
// console.log(el.value)

// we can tell TS to treat el as HTMLInputElement explicitly 

// const el = document.querySelector('input[type="text"]');
// const input1 = el as HTMLInputElement;  // method 1 - using as
// const input2 = <HTMLInputElement>el     // method 2 - using <>
// console.log(input1.value, input2.value)

// imp : HTMLInputElement is an interface that extends Element (or extends classes that extends Element) that's why it works
// cant be put as String because String doesnt extend its base type (Element)


// Generics : Allows to write a functions that can be used with multiple types

function findElementAndChange<T>(toFind: T, toChange: T, array: T[] ): T[] 
{
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) {
            array[i] = toChange;
        }
    }
    return array;
} // works for all types: string, bigint, number, boolean, object

// passing two types
function merge<U, V>(obj1: U, obj2: V) 
{
    return { ...obj1, ...obj2 };
}
// however this function fails if a number is passed along with an objects

// Generic Constraints: 

// using 'extends' prevents from passing objects types that dont match or break the functions .. acting as constraint
function mergeObjects<U extends object, V extends object>(obj1: U, obj2: V) 
{
    return { ...obj1, ...obj2 };
}


// Generic Interfaces:
interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<number, string> = {
    key: 9,
    value: 'September'
}

// Generic Methods:
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

// Generic Class:
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // 10

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello