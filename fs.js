var fs = require("fs");
var data = fs.readFile('../fuckyou.txt',function (error,data) {
    console.error('error');
})
console.log('ok!');