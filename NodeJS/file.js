const fs = require('fs');

// readFile is asynchronous
fs.readFile('dummy.txt', 'utf8', (err, content)=>{
    console.log(err, content)
})

// readFileSync is synchronous
const content = fs.readFileSync('dummy.txt')
console.log(content.toString())
console.log("Line after read file")

fs.writeFile('dummy2.txt', 'This is the file in which data is written 2', ()=>{
    console.log("Written to file")
})

const msg = fs.writeFileSync('dummy2.txt', 'This is the file in which data is written')
console.log(msg)