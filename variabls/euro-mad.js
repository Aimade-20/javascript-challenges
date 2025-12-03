const p =require("prompt-sync")()
 
let euro = parseInt(p("convertit des euros :"));
let MAD = euro * 10.61;
console.log("MAD :",MAD.toFixed(2));