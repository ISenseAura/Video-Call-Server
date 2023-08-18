const path = require('path');
const { createServer } = require('http');

const express = require('express');
const { getIO, initIO } = require('./socket');

const app = express();


app.get("/",(req,res) => {
    res.send("hello");
})

const httpServer = createServer(app);

let port = process.env.PORT || 443;

initIO(httpServer);

httpServer.listen(port)
console.log("Server started on ", port);

getIO();