const fs = require("fs");
let res = fs.readFileSync("./mydata.json").toString();
// console.log(res.toString());
let reg = /\}\s*\,\s*{/g
let result = res.replace(reg, "}{");
fs.writeFileSync("./wxlist.json", result);