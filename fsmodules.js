const fs = require('fs');
// fs.readFile('file.txt','utf8',(err, data)=>{
//     console.log(err,data)
// })
const a = fs.readFileSync("file.txt")
console.log(a); //buffer
console.log(a.toString()); //for content
console.log("finished reading text")