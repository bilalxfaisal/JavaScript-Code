function performArithmetic(n1, n2)
{
    console.log(`Addition: ${n1+n2}`)
    console.log(`Subtraction: ${n1-n2}`)
    console.log(`Multiplication: ${n1*n2}`)
    console.log(`Division: ${n1/n2}`)
}

function calculateSum(n1, n2)
{
    //console.log(n1 + n2)
    return (n1 + n2);
}
//performArithmetic(5, 3)

// let sum = calculateSum(1, 2)
// console.log(sum)

function printNumbers(...num)
{
    return num
}

// console.log(printNumbers(1,2,3,4,5))

let doSum = (a,b) => (a+b)

console.log(doSum(1,2))

let Student = 
{
    name: "Bilal",
    age: 20
}

for (let i = 0; i <= 2; i++)
console.log(Object.keys(Student))