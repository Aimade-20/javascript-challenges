const p = require("prompt-sync")()
let r = parseInt(p("entre le rayon :"));

let c = 2 * Math.PI * r;
console.log("circonference et :",c.toFixed(2));
