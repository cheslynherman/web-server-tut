var http = require("http"); 
// 1 - import node.js core module 

var server = http.createServer (function (req, res) {
// 2- creating server 
// handle incoming requests here..
});

server.listen (5000); 
// 3- listen for any incoming requests

console.log ("Node.js web server at port 5000 is running");
