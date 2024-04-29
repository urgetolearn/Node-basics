var slugify = require('slugify')
let a = slugify('some string') //some-string
console.log(a);
let b = slugify("some string", "_") //some_string;
console.log(b);
let c = slugify('some st&&*(^%$$#^^&ring','_')
console.log(c);