var http = require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{'contentType': 'text/plain'});
    response.end("HELLO!");
}).listen(8080);
console.log("running!");