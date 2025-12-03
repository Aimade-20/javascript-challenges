const prompt = require("prompt-sync")()
let a = parseInt(prompt("enter la valeur de a :"));
let b = parseInt(prompt("enter la valeur de b :"));
let c = parseInt(prompt("enter la valeur de c :"));
let d = parseInt(prompt("enter la valeur de d :"));
let somme = a+b+c+d;
console.log("le somme :" ,somme);
console.log("le moyenne : ",somme / 4);