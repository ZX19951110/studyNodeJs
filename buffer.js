var fs = require("fs");
function buffer() {
    this.input = function(string) {
        var input = fs.createWriteStream('.output');
        input.write(string, 'UTF8');
        input.end();
        input.on('error', function (error) {
            console.log(error.state)
        })
        input.on('finish', function () {
            console.log("Done")
        })
    }
}
module.exports = buffer;
//buffer.pipe(input);
