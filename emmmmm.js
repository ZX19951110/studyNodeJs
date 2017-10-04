var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on('trigger',function (arg1,arg2) {
    console.log('first trigger'+arg1);
});
eventEmitter.emit('trigger',1);