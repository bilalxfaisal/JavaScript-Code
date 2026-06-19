"use strict";
let myname = "Bilal";
const age = 20;
let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let square;
square = function (value) {
    return value * value;
};
function createUser(username, email, age) {
    return { username, email, age };
}
const user1 = createUser("john_doe", "john@example.com", 30);
console.log(user1);
function getWeatherForecast(weather) {
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
const todayWeather = "sunny";
console.log(getWeatherForecast(todayWeather));
// use union to allow multiple types for a variable
function getID(id) { }
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
const stringValue = {
    value: "",
    get() {
        return this.value;
    },
    set(newValue) {
        this.value = newValue;
    }
};
const numberValue = {
    value: 0,
    get() {
        return this.value;
    },
    set(newValue) {
        this.value = newValue;
    }
};
stringValue.set("Hello, TypeScript!");
console.log(stringValue.get());
numberValue.set(42);
console.log(numberValue.get());
const student1 = [1, "Alice", 3.8];
const student2 = [2, "Bob", 3.5];
// enum in typescript
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
function move(direction) {
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
let candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
};
class Circle {
    area(x, y) {
        return Math.PI * x * y;
    }
    perimeter(x, y) {
        return 2 * (x + y);
    }
}
class TriangleClass {
    area(x, y) {
        return 0.5 * x * y;
    }
    perimeter(x, y) {
        return x + y + Math.sqrt(x * x + y * y);
    }
}
// if a interface is extended from a class A, then only those classes can implement that interface which are also extended from class A
class BaseClass {
    baseMethod() {
        console.log("This is a method from the base class.");
    }
}
class DerivedClass extends BaseClass {
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
class AnotherClass {
    baseMethod() {
        console.log("This is base method from another class");
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
function findElementAndChange(toFind, toChange, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) {
            array[i] = toChange;
        }
    }
    return array;
} // works for all types: string, bigint, number, boolean, object
// passing two types
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// however this function fails if a number is passed along with an objects
// Generic Constraints: 
// using 'extends' prevents from passing objects types that dont match or break the functions .. acting as constraint
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let month = {
    key: 9,
    value: 'September'
};
// Generic Class:
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberBox = new Box(10);
console.log(numberBox.getValue()); // 10
const stringBox = new Box("Hello");
console.log(stringBox.getValue()); // Hello
