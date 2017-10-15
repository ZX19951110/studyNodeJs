var process = require("child_process");
var CMD = process.exec("cat ./buffer.js",1,function (err,stdout,stderr) {
    console.log(stdout);
});
CMD.on("exit",function (code) {
    console.log("结束"+code);
});