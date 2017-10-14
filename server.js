var util = require("util");
var url = require("url");
var http = require("http");
function run(request,response) {
    response.writeHead(200,{"Content-Type": "text/plain;charset=utf8"});
    response.end(util.inspect(url.parse(request.url,1)));
}
http.createServer(run).listen(8000);