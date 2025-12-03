const p =require("prompt-sync")()
 
let kilomètres = parseInt(p("demender le destence en kilomètres :"));
let miles =  kilomètres / 1.609;
console.log("miles",miles.toFixed(2));