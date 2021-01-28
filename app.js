var express = require("express");
var apiServer = express();


var hostname = "127.0.0.1";
var port = 3000;

apiServer.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiServer.get("nome", (req, res) =>{
    console.log("ho ricevuto un get su nome");
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Ciao sono il server Node");
});