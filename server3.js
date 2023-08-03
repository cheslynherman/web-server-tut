var http = require ("http");
var server = http.createServer(function (req, res){
    // if (req.url == "/data") {
    //     // check the URL of the current request
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.write(JSON.stringify({message: "Hello World"}));
    //     res.end();
    // }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    // status code http 200 / ok

    let dataObj = {id: 123, name: "bob", email: "bob@work.com"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(5000);
console.log ("Node.js web server at port 5000 is running..")