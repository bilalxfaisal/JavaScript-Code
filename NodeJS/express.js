const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Welcome back!")
})
app.get('/about', (req, res)=>{
    res.send("This is the About page!")
})
app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`)
})

// res.end - node.js http module
// you need to manually set headers and status codes

// res.send() is a higher-level method that:
// Sends the response body
// Automatically sets the Content-Type
// Automatically calculates Content-Length
// Ends the response for you