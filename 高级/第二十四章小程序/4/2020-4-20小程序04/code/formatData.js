const fs = require("fs");
// let mydata = require("./mydata.json");
let str = fs.readFileSync("./mydata.json").toString();
// console.log(str);
let reg = /\}\s*,\s*\{/g;
let newStr = str.replace(reg, "}{");
// console.log(newStr);
fs.writeFileSync("./formatData.json", newStr);