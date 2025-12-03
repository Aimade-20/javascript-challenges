const p = require("prompt-sync")()

let nb = p("entre un number :");

if(nb %2 === 0)
{
    console.log("pair !");
}
else
{
    console.log ("impair");
}