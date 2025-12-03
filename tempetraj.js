const p = require("prompt-sync")()

let disttace = parseInt(p("la distance :"));
let vitesse = parseInt(p("la vitesse :"));
let temps = disttace / vitesse;
 console.log("le temps :" ,temps);