var dns = require("dns");
var http = require("http");
var util = require("util");
var url = require("url");

function getIP (request,response){
    var self = this;
    var location = '';
    response.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
    var address = url.parse(request.url,true).query.address;
    dns.lookup(address,function (err,IP,family) {
        var sina_server = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip='+IP;
        var res = '';
        http.get(sina_server,function (result) {
            result.on("data",function (data) {
                res = JSON.parse(data);
                response.end(IP+"-"+res.country+"-"+res.province+"-"+res.city);
            })
        });
    });
}
http.createServer(getIP).listen(8080);