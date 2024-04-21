const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterfull", () => {
  console.log("turn off the motor");
  setTimeout(() => {
    console.log(" its a gentle remainder turn off the motor");
  }, 3000);
});
console.log("the script is running")
// for this to run, remove that type from package.json
myEmitter.emit("waterfull");// this doesn't block
console.log("the script is still running");// comes within 3000 sec
