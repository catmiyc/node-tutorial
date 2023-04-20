// CommonJS --- every file is module
// Modules --- Encapsulated code

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
console.log(data);
sayHi("Susan");
sayHi(names.peter);
sayHi(names.john);
