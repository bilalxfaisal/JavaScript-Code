const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 600 // if it doesnt find PORT from env .. it considers 600 as the port

const server = http.createServer((req, res)=>{
    //res.statusCode = 200; // not good practice
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url)

    if(req.url === '/'){
        res.statusCode = 200
        res.end("<h1> Bilal's LocalHost </h1>");
    }
    else if(req.url === '/about'){
        res.statusCode = 200
        res.end("<h1> About Bilal's LocalHost </h1>");
    }
    else if(req.url === '/web'){
        res.statusCode = 200
        const web = fs.readFileSync('basic.html')
        res.end(web)
    }
    else{
        res.statusCode = 404
        res.end("<h1> Wrong page accessed <h1>");
    }
    
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

// statusCode = 200 - means that every request to this server was successfull, valid API call
// statusCode = 404 - means that wrong route accessed
// statusCode = 500 - means server error

// Content-Type - means that in which type of format i am accepting the request to this server
// - text/html: accepting request in html
// - application/json: accepting request in json ... and much more