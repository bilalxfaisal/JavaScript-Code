const express = require('express');
const app = express();
const port = 3000

const pageRoutes = require('./routes/pages');

app.use('/', pageRoutes);

app.listen(port, ()=>{
    console.log(`Listening port ${port}`)
});

// app.use - mounting a router at a specific path 
// router.get - defining the routes inside that mounted area