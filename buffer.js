var fs = require("fs");
var string = '';
var buffer = fs.createReadStream('./package-lock.json');
var input = fs.createWriteStream('.output');
/*buffer.setEncoding('ascii');
buffer.on('data',function (char) {
    string+=char;
})
buffer.on('end',function () {
    input.write(string,'UTF8');
    input.end();
    input.on('error',function (error) {
        console.log(error.state)
    })
    input.on('finish',function () {
        console.log("Done")
    })
})*/
buffer.pipe(input);
