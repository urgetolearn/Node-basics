const fs = require('fs');
// fs.writeFile('file2.txt','I am CHINMAYI',()=>{
//     console.log("written to the file")
// });
b = fs.writeFileSync('file2.txt','As always')
console.log(b)
console.log("read the file")