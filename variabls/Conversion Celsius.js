const prompt = require("prompt-sync")()

let C = prompt("Quelle est la température aujourd'hui ? ");
let F = (C * 1.8) + 32;

console.log("Température en Fahrenheit :" + F);